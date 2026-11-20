import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/services/digital-marketing")({
  component: () => <Outlet />,
});
