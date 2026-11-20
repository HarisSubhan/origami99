import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { servicesApi } from "@/lib/admin/api";
import type { Service } from "@/lib/admin/types";
import { PageHeader } from "@/components/admin/PageHeader";
import { ImageUpload } from "@/components/admin/ImageUpload";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Plus, Pencil, Trash2 } from "lucide-react";

export const Route = createFileRoute("/admin/services")({ component: ServicesPage });

const empty: Omit<Service, "id" | "updatedAt"> = {
  slug: "", title: "", category: "", summary: "",
  tagline: "", hero: "", body: "", heroImageUrl: null, published: false,
};

function ServicesPage() {
  const qc = useQueryClient();
  const { data } = useQuery({ queryKey: ["admin", "services"], queryFn: servicesApi.list });
  const [editing, setEditing] = useState<Service | null>(null);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(empty);

  const save = useMutation({
    mutationFn: () => editing ? servicesApi.update(editing.id, form) : servicesApi.create(form),
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["admin", "services"] }); setOpen(false); },
  });
  const remove = useMutation({
    mutationFn: (id: string) => servicesApi.remove(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["admin", "services"] }),
  });

  const openNew = () => { setEditing(null); setForm(empty); setOpen(true); };
  const openEdit = (s: Service) => {
    setEditing(s);
    setForm({
      slug: s.slug, title: s.title, category: s.category, summary: s.summary,
      tagline: s.tagline ?? "", hero: s.hero ?? "", body: s.body ?? "",
      heroImageUrl: s.heroImageUrl ?? null, published: s.published,
    });
    setOpen(true);
  };

  return (
    <div>
      <PageHeader title="Services" description="Edits here override the static service pages on the public site." actions={<Button onClick={openNew}><Plus className="mr-2 h-4 w-4" />New service</Button>} />

      <div className="rounded-lg border border-border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Published</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {(data ?? []).map((s) => (
              <TableRow key={s.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    {s.heroImageUrl && <img src={s.heroImageUrl} alt="" className="h-8 w-12 rounded object-cover" />}
                    <span className="font-medium">{s.title}</span>
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground">/services/{s.slug}</TableCell>
                <TableCell>{s.category}</TableCell>
                <TableCell>{s.published ? "Yes" : "Draft"}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" onClick={() => openEdit(s)}><Pencil className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="icon" onClick={() => remove.mutate(s.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader><DialogTitle>{editing ? "Edit service" : "New service"}</DialogTitle></DialogHeader>
          <div className="grid gap-3">
            <div className="space-y-1.5"><Label>Title</Label><Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} /></div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5"><Label>Slug</Label><Input value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} /></div>
              <div className="space-y-1.5"><Label>Category</Label><Input value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} /></div>
            </div>
            <div className="space-y-1.5"><Label>Tagline (short, one-liner)</Label><Input value={form.tagline ?? ""} onChange={(e) => setForm({ ...form, tagline: e.target.value })} /></div>
            <div className="space-y-1.5"><Label>Summary (card description)</Label><Textarea rows={2} value={form.summary} onChange={(e) => setForm({ ...form, summary: e.target.value })} /></div>
            <ImageUpload label="Hero image" value={form.heroImageUrl} onChange={(url) => setForm({ ...form, heroImageUrl: url })} />
            <div className="space-y-1.5"><Label>Hero paragraph</Label><Textarea rows={3} value={form.hero ?? ""} onChange={(e) => setForm({ ...form, hero: e.target.value })} /></div>
            <div className="space-y-1.5"><Label>Body content (markdown / plain text)</Label><Textarea rows={8} value={form.body ?? ""} onChange={(e) => setForm({ ...form, body: e.target.value })} /></div>
            <div className="flex items-center gap-2"><Switch checked={form.published} onCheckedChange={(v) => setForm({ ...form, published: v })} /><Label>Published</Label></div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => save.mutate()} disabled={save.isPending || !form.title}>{editing ? "Save" : "Create"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
