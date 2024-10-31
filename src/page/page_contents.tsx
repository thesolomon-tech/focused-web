import React, { useState } from "react";
import FocusedTable from "./table";
import { ChevronDown, ChevronRight } from "lucide-react";

const Page_contents = () => {
  const [table, toggleTable] = useState<boolean>(true);
  const [youtubeSettings, toggleYoutubeSettings] = useState<boolean>(true);
  return (
    <>
      <div style={{ marginLeft: 20 }}>
        <h1> Focused Web</h1>

        <div style={{ width: 300, height: 300 }}>
          <h3
            onClick={() => toggleTable(!table)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
            }}
          >
            Blocked Websites {table ? <ChevronDown /> : <ChevronRight />}
          </h3>
          {table ? <FocusedTable /> : null}
        </div>
      </div>
    </>
  );
};
export default Page_contents;
