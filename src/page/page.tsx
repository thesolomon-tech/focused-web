import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import FocusedTable from "./table";

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <div>
    <FocusedTable />

    </div>
  </React.StrictMode>
);
