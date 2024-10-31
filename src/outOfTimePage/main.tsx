import React from "react";
import { createRoot } from "react-dom/client";
import OutOfTimePage from "./outOfTimePage";

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <div>
     <OutOfTimePage/>
    </div>
  </React.StrictMode>
);

