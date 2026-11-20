import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { portfolioApi } from "@/lib/admin/api";
import type { PortfolioProject } from "@/lib/admin/types";
import { PageHeader } from "@/components/admin/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Plus, Pencil, Trash2 } from "lucide-react";

export const Route = createFileRoute("/admin/portfolio")({ component: PortfolioPage });

const empty = { title: "", client: "", industry: "", tags: [] as string[], summary: "", coverUrl: "", published: false };

function PortfolioPage() {
  const qc = useQueryClient();
  const { data } = useQuery({ queryKey: ["admin", "portfolio"], queryFn: portfolioApi.list });
  const [editing, setEditing] = useState<PortfolioProject | null>(null);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<typeof empty>(empty);

  const save = useMutation({
    mutationFn: () => editing ? portfolioApi.update(editing.id, form) : portfolioApi.create(form),
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["admin", "portfolio"] }); setOpen(false); },
  });
  const remove = useMutation({
    mutationFn: (id: string) => portfolioApi.remove(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["admin", "portfolio"] }),
  });

  const openNew = () => { setEditing(null); setForm(empty); setOpen(true); };
  const openEdit = (p: PortfolioProject) => {
    setEditing(p);
    setForm({ title: p.title, client: p.client, industry: p.industry, tags: p.tags, summary: p.summary, coverUrl: p.coverUrl ?? "", published: p.published });
    setOpen(true);
  };

  return (
    <div>
      <PageHeader title="Portfolio" description="Client case studies and projects." actions={<Button onClick={openNew}><Plus className="mr-2 h-4 w-4" />New project</Button>} />

      <div className="rounded-lg border border-border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Project</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Industry</TableHead>
              <TableHead>Tags</TableHead>
              <TableHead>Published</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {(data ?? []).map((p) => (
              <TableRow key={p.id}>
                <TableCell className="font-medium">{p.title}</TableCell>
                <TableCell className="text-muted-foreground">{p.client}</TableCell>
                <TableCell>{p.industry}</TableCell>
                <TableCell className="text-xs text-muted-foreground">{p.tags.join(", ")}</TableCell>
                <TableCell>{p.published ? "Yes" : "Draft"}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" onClick={() => openEdit(p)}><Pencil className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="icon" onClick={() => remove.mutate(p.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader><DialogTitle>{editing ? "Edit project" : "New project"}</DialogTitle></DialogHeader>
          <div className="grid gap-3">
            <div className="space-y-1.5"><Label>Title</Label><Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} /></div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5"><Label>Client</Label><Input value={form.client} onChange={(e) => setForm({ ...form, client: e.target.value })} /></div>
              <div className="space-y-1.5"><Label>Industry</Label><Input value={form.industry} onChange={(e) => setForm({ ...form, industry: e.target.value })} /></div>
            </div>
            <div className="space-y-1.5"><Label>Tags (comma-separated)</Label><Input value={form.tags.join(", ")} onChange={(e) => setForm({ ...form, tags: e.target.value.split(",").map((t) => t.trim()).filter(Boolean) })} /></div>
            <div className="space-y-1.5"><Label>Cover image URL</Label><Input value={form.coverUrl} onChange={(e) => setForm({ ...form, coverUrl: e.target.value })} /></div>
            <div className="space-y-1.5"><Label>Summary</Label><Textarea rows={3} value={form.summary} onChange={(e) => setForm({ ...form, summary: e.target.value })} /></div>
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
