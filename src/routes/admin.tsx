import { createFileRoute, Outlet, useRouterState, Link } from "@tanstack/react-router";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminLogin } from "@/components/admin/AdminLogin";
import { AdminAuthProvider, useAdminAuth } from "@/lib/admin/auth-context";
import { USE_MOCK } from "@/lib/admin/api";
import type { Role } from "@/lib/admin/types";
import { Loader2, ShieldAlert } from "lucide-react";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Panel, Origami99" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminLayout,
});

// Client-side role map for admin sub-routes. Mirrors the mock-mode enforcement
// in src/lib/admin/api.ts. Real backends MUST re-check on every endpoint.
const ROUTE_ROLE_REQUIREMENTS: { prefix: string; allowed: Role[] }[] = [
  { prefix: "/admin/users", allowed: ["admin"] },
];

function requiredRolesFor(pathname: string): Role[] | null {
  const match = ROUTE_ROLE_REQUIREMENTS.find((r) => pathname.startsWith(r.prefix));
  return match ? match.allowed : null;
}

function AdminLayout() {
  return (
    <AdminAuthProvider>
      <AdminGate />
    </AdminAuthProvider>
  );
}

function AdminGate() {
  const { user, loading } = useAdminAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!user) return <AdminLogin />;

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-muted/30">
        <AdminSidebar />
        <div className="flex flex-1 flex-col">
          <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b border-border bg-background/80 px-4 backdrop-blur">
            <div className="flex items-center gap-2">
              <SidebarTrigger />
              <span className="text-sm text-muted-foreground">Welcome back, {user.name}</span>
              <span className="ml-2 rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                {user.role}
              </span>
            </div>
            {USE_MOCK && (
              <span className="rounded-full bg-amber-500/15 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-amber-600 dark:text-amber-400">
                Mock data
              </span>
            )}
          </header>
          <main className="flex-1 p-6">
            <RoleGuardedOutlet userRole={user.role} />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

function RoleGuardedOutlet({ userRole }: { userRole: Role }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const required = requiredRolesFor(pathname);
  if (required && !required.includes(userRole)) {
    return (
      <div className="mx-auto max-w-md rounded-xl border border-border bg-background p-8 text-center">
        <ShieldAlert className="mx-auto mb-3 h-8 w-8 text-destructive" />
        <h2 className="text-lg font-semibold">403, insufficient privileges</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This section requires the <strong>{required.join(" or ")}</strong> role.
          Your current role is <strong>{userRole}</strong>.
        </p>
        <Link
          to="/admin"
          className="mt-4 inline-block rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
        >
          Back to dashboard
        </Link>
      </div>
    );
  }
  return <Outlet />;
}

