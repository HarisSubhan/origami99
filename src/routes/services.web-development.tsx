import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/services/web-development")({
  component: () => <Outlet />,
});
