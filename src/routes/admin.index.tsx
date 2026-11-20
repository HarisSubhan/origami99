import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { analyticsApi, leadsApi } from "@/lib/admin/api";
import { PageHeader } from "@/components/admin/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users as UsersIcon, Eye, Inbox, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/admin/")({
  component: DashboardPage,
});

function DashboardPage() {
  const analyticsQ = useQuery({ queryKey: ["admin", "analytics"], queryFn: analyticsApi.summary });
  const leadsQ = useQuery({ queryKey: ["admin", "leads"], queryFn: leadsApi.list });

  const a = analyticsQ.data;
  const recentLeads = (leadsQ.data ?? []).slice(0, 5);

  const stats = [
    { label: "Visitors (30d)", value: a ? a.visitors30d.toLocaleString() : "—", icon: UsersIcon },
    { label: "Pageviews (30d)", value: a ? a.pageviews30d.toLocaleString() : "—", icon: Eye },
    { label: "Leads (30d)", value: a ? a.leads30d.toLocaleString() : "—", icon: Inbox },
    { label: "Conv. Rate", value: a ? `${(a.conversionRate * 100).toFixed(2)}%` : "—", icon: TrendingUp },
  ];

  const maxV = a ? Math.max(...a.series.map((s) => s.visitors)) : 1;

  return (
    <div>
      <PageHeader title="Dashboard" description="Overview of traffic and lead activity." />

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s) => (
          <Card key={s.label}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs font-medium text-muted-foreground">{s.label}</CardTitle>
              <s.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">{s.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">Visitors — last 30 days</CardTitle>
          </CardHeader>
          <CardContent>
            {a ? (
              <div className="flex h-48 items-end gap-1">
                {a.series.map((d) => (
                  <div
                    key={d.date}
                    title={`${d.date} — ${d.visitors} visitors, ${d.leads} leads`}
                    className="flex-1 rounded-t bg-primary/70 transition-colors hover:bg-primary"
                    style={{ height: `${(d.visitors / maxV) * 100}%` }}
                  />
                ))}
              </div>
            ) : (
              <div className="h-48 animate-pulse rounded bg-muted" />
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Top sources</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            {(a?.topSources ?? []).map((s) => (
              <div key={s.source} className="flex justify-between">
                <span>{s.source}</span>
                <span className="font-medium text-muted-foreground">{s.visits.toLocaleString()}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="text-base">Recent leads</CardTitle>
        </CardHeader>
        <CardContent>
          {recentLeads.length === 0 && <p className="text-sm text-muted-foreground">No leads yet.</p>}
          <ul className="divide-y divide-border">
            {recentLeads.map((l) => (
              <li key={l.id} className="flex items-center justify-between py-3 text-sm">
                <div>
                  <p className="font-medium">{l.name}</p>
                  <p className="text-xs text-muted-foreground">{l.email} · {l.service ?? "—"}</p>
                </div>
                <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] uppercase tracking-wide">{l.status}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
