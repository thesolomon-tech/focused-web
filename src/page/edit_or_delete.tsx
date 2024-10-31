import React from "react";
import DeleteURL from "./deleteURL";
import { FocusedDetails } from "../types";
import EditURL from "./editURL";
import CreateURL from "./createURL";
interface edit_or_delete_props {
  selectedUrls: string[];
  setSelectedUrls: React.Dispatch<React.SetStateAction<string[]>>;
  Table_Data: FocusedDetails;
  setTable_Data: React.Dispatch<React.SetStateAction<FocusedDetails>>;
}

const Edit_or_delete = ({
  selectedUrls,
  setSelectedUrls,
  Table_Data,
  setTable_Data,
}: edit_or_delete_props) => {
  if (selectedUrls.length > 0) {
    if (selectedUrls.length > 1) {
      return (
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <DeleteURL
            Table_Data={Table_Data}
            setTable_Data={setTable_Data}
            selectedUrls={selectedUrls}
            setSelectedUrls={setSelectedUrls}
          />
        </div>
      );
    } else {
      return (
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <EditURL
            selectedUrls={selectedUrls}
            setSelectedUrls={setSelectedUrls}
            Table_Data={Table_Data}
            setTable_Data={setTable_Data}
          />
          <DeleteURL
            Table_Data={Table_Data}
            setTable_Data={setTable_Data}
            selectedUrls={selectedUrls}
            setSelectedUrls={setSelectedUrls}
          />
        </div>
      );
    }
  } else {
    return (
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <CreateURL
          Table_Data={Table_Data}
          setTable_Data={setTable_Data}
          selectedUrls={selectedUrls}
          setSelectedUrls={setSelectedUrls}
        />
      </div>
    );
  }
  return <></>;
};
export default Edit_or_delete;
