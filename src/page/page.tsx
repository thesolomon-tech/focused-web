import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Page_contents from "./page_contents";
const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <Page_contents />
  </React.StrictMode>
);
