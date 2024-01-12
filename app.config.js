import reactRefresh from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import { createApp } from "vinxi";

export default createApp({
  routers: [
    {
      name: "public",
      mode: "static",
      dir: "./public",
      base: "/",
    },
    {
      name: "client",
      mode: "build",
      handler: "./app/client.tsx",
      target: "browser",
      plugins: () => [reactRefresh(), TanStackRouterVite()],
      base: "/_build",
    },
    {
      name: "ssr",
      mode: "handler",
      middleware: "./app/middleware.tsx",
      handler: "./app/server.tsx",
      target: "server",
      plugins: () => [reactRefresh(), TanStackRouterVite()],
    },
  ],
});
