import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { blogsApi } from "@/lib/admin/api";
import type { BlogPost } from "@/lib/admin/types";
import { PageHeader } from "@/components/admin/PageHeader";
import { ImageUpload } from "@/components/admin/ImageUpload";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Plus, Pencil, Trash2 } from "lucide-react";

export const Route = createFileRoute("/admin/blogs")({ component: BlogsPage });

const empty: Omit<BlogPost, "id" | "updatedAt"> = {
  slug: "", title: "", excerpt: "", body: "", coverUrl: null, author: "", status: "draft", publishedAt: null,
};

function BlogsPage() {
  const qc = useQueryClient();
  const { data } = useQuery({ queryKey: ["admin", "blogs"], queryFn: blogsApi.list });
  const [editing, setEditing] = useState<BlogPost | null>(null);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(empty);

  const save = useMutation({
    mutationFn: () => editing ? blogsApi.update(editing.id, form) : blogsApi.create(form),
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["admin", "blogs"] }); setOpen(false); },
  });
  const remove = useMutation({
    mutationFn: (id: string) => blogsApi.remove(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["admin", "blogs"] }),
  });

  const openNew = () => { setEditing(null); setForm(empty); setOpen(true); };
  const openEdit = (b: BlogPost) => {
    setEditing(b);
    setForm({ slug: b.slug, title: b.title, excerpt: b.excerpt, body: b.body ?? "", coverUrl: b.coverUrl ?? null, author: b.author, status: b.status, publishedAt: b.publishedAt ?? null });
    setOpen(true);
  };

  return (
    <div>
      <PageHeader title="Blogs" description="Articles published at /blog on the public site." actions={<Button onClick={openNew}><Plus className="mr-2 h-4 w-4" />New post</Button>} />

      <div className="rounded-lg border border-border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Updated</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {(data ?? []).map((b) => (
              <TableRow key={b.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    {b.coverUrl && <img src={b.coverUrl} alt="" className="h-8 w-12 rounded object-cover" />}
                    <div>
                      <div className="font-medium">{b.title}</div>
                      <div className="text-xs text-muted-foreground">/blog/{b.slug}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{b.author}</TableCell>
                <TableCell><span className="rounded-full bg-muted px-2 py-0.5 text-[10px] uppercase tracking-wide">{b.status}</span></TableCell>
                <TableCell className="text-xs text-muted-foreground">{new Date(b.updatedAt).toLocaleDateString()}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" onClick={() => openEdit(b)}><Pencil className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="icon" onClick={() => remove.mutate(b.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader><DialogTitle>{editing ? "Edit post" : "New post"}</DialogTitle></DialogHeader>
          <div className="grid gap-3">
            <div className="space-y-1.5"><Label>Title</Label><Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} /></div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5"><Label>Slug</Label><Input value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} /></div>
              <div className="space-y-1.5"><Label>Author</Label><Input value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} /></div>
            </div>
            <ImageUpload label="Cover image" value={form.coverUrl} onChange={(url) => setForm({ ...form, coverUrl: url })} />
            <div className="space-y-1.5"><Label>Excerpt</Label><Textarea rows={2} value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} /></div>
            <div className="space-y-1.5"><Label>Body (markdown / plain text)</Label><Textarea rows={10} value={form.body} onChange={(e) => setForm({ ...form, body: e.target.value })} /></div>
            <div className="space-y-1.5">
              <Label>Status</Label>
              <Select value={form.status} onValueChange={(v) => setForm({ ...form, status: v as BlogPost["status"], publishedAt: v === "published" ? new Date().toISOString() : null })}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                </SelectContent>
              </Select>
            </div>
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
