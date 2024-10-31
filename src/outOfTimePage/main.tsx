import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <div>
      <button> testing</button>
    </div>
  </React.StrictMode>
);
