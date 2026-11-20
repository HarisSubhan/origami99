import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { leadsApi } from "@/lib/admin/api";
import type { Lead } from "@/lib/admin/types";
import { PageHeader } from "@/components/admin/PageHeader";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Trash2, Eye } from "lucide-react";

const STATUSES: Lead["status"][] = ["new", "contacted", "qualified", "won", "lost"];

export const Route = createFileRoute("/admin/leads")({ component: LeadsPage });

function LeadsPage() {
  const qc = useQueryClient();
  const { data, isLoading } = useQuery({ queryKey: ["admin", "leads"], queryFn: leadsApi.list });
  const [filter, setFilter] = useState<Lead["status"] | "all">("all");
  const [selected, setSelected] = useState<Lead | null>(null);

  const update = useMutation({
    mutationFn: ({ id, patch }: { id: string; patch: Partial<Lead> }) => leadsApi.update(id, patch),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["admin", "leads"] }),
  });
  const remove = useMutation({
    mutationFn: (id: string) => leadsApi.remove(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["admin", "leads"] }),
  });

  const rows = (data ?? []).filter((l) => filter === "all" || l.status === filter);

  return (
    <div>
      <PageHeader
        title="Leads"
        description="Inquiries submitted through the website contact form."
        actions={
          <Select value={filter} onValueChange={(v) => setFilter(v as typeof filter)}>
            <SelectTrigger className="w-40"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All statuses</SelectItem>
              {STATUSES.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
            </SelectContent>
          </Select>
        }
      />

      <div className="rounded-lg border border-border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Service</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Source</TableHead>
              <TableHead>Received</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading && <TableRow><TableCell colSpan={8} className="text-center text-sm text-muted-foreground">Loading…</TableCell></TableRow>}
            {!isLoading && rows.length === 0 && <TableRow><TableCell colSpan={8} className="text-center text-sm text-muted-foreground">No leads.</TableCell></TableRow>}
            {rows.map((l) => (
              <TableRow key={l.id}>
                <TableCell>
                  <div className="font-medium">{l.name}</div>
                  <div className="text-xs text-muted-foreground">{l.email}</div>
                </TableCell>
                <TableCell className="text-muted-foreground">{l.phone ?? "-"}</TableCell>
                <TableCell className="text-muted-foreground">{l.company ?? "-"}</TableCell>
                <TableCell className="text-muted-foreground">{l.service ?? "-"}</TableCell>
                <TableCell>
                  <Select value={l.status} onValueChange={(v) => update.mutate({ id: l.id, patch: { status: v as Lead["status"] } })}>
                    <SelectTrigger className="h-8 w-32"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {STATUSES.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className="text-muted-foreground text-xs">{l.source ?? "-"}</TableCell>
                <TableCell className="text-muted-foreground text-xs">{new Date(l.createdAt).toLocaleDateString()}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" onClick={() => setSelected(l)}><Eye className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="icon" onClick={() => remove.mutate(l.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent>
          <DialogHeader><DialogTitle>{selected?.name}</DialogTitle></DialogHeader>
          {selected && (
            <div className="space-y-2 text-sm">
              <div><span className="text-muted-foreground">Email:</span> {selected.email}</div>
              {selected.phone && <div><span className="text-muted-foreground">Phone:</span> {selected.phone}</div>}
              {selected.company && <div><span className="text-muted-foreground">Company:</span> {selected.company}</div>}
              {selected.service && <div><span className="text-muted-foreground">Service:</span> {selected.service}</div>}
              <div className="rounded-md bg-muted/50 p-3 text-sm whitespace-pre-wrap">{selected.message}</div>
              <div className="text-xs text-muted-foreground">Received {new Date(selected.createdAt).toLocaleString()}</div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
