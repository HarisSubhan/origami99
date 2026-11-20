import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { pagesApi } from "@/lib/admin/api";
import type { SitePage } from "@/lib/admin/types";
import { PageHeader } from "@/components/admin/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Pencil } from "lucide-react";

export const Route = createFileRoute("/admin/pages")({ component: PagesPage });

function PagesPage() {
  const qc = useQueryClient();
  const { data } = useQuery({ queryKey: ["admin", "pages"], queryFn: pagesApi.list });
  const [editing, setEditing] = useState<SitePage | null>(null);
  const [form, setForm] = useState({ title: "", metaDescription: "" });

  const save = useMutation({
    mutationFn: () => pagesApi.update(editing!.id, form),
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["admin", "pages"] }); setEditing(null); },
  });

  const open = (p: SitePage) => { setEditing(p); setForm({ title: p.title, metaDescription: p.metaDescription }); };

  return (
    <div>
      <PageHeader title="Pages" description="SEO metadata for static site pages." />

      <div className="rounded-lg border border-border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Path</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Meta description</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {(data ?? []).map((p) => (
              <TableRow key={p.id}>
                <TableCell className="font-mono text-xs">{p.slug}</TableCell>
                <TableCell className="font-medium">{p.title}</TableCell>
                <TableCell className="max-w-md truncate text-xs text-muted-foreground">{p.metaDescription}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" onClick={() => open(p)}><Pencil className="h-4 w-4" /></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={!!editing} onOpenChange={(o) => !o && setEditing(null)}>
        <DialogContent>
          <DialogHeader><DialogTitle>Edit {editing?.slug}</DialogTitle></DialogHeader>
          <div className="grid gap-3">
            <div className="space-y-1.5"><Label>Title</Label><Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} /></div>
            <div className="space-y-1.5"><Label>Meta description</Label><Textarea rows={3} value={form.metaDescription} onChange={(e) => setForm({ ...form, metaDescription: e.target.value })} /></div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditing(null)}>Cancel</Button>
            <Button onClick={() => save.mutate()} disabled={save.isPending}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
