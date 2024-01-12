import * as React from "react";
import { FileRoute } from "@tanstack/react-router";

export const Route = new FileRoute('/hello').createRoute({
  component: Hello,
});

function Hello() {
  return (
    <div>
      <p>hello</p>
    </div>
  );
}
