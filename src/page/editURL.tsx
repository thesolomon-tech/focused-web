import React, { useState } from "react";
import { FocusedDetails } from "../types";
import SimplePopup from "./Popup";
import URL_Adjustment_form from "./URL_Adjustment_form";
interface editURL_props {
  selectedUrls: string[];
  setSelectedUrls: React.Dispatch<React.SetStateAction<string[]>>;
  Table_Data: FocusedDetails;
  setTable_Data: React.Dispatch<React.SetStateAction<FocusedDetails>>;
}

export default function EditURL({
  selectedUrls,
  setSelectedUrls,
  Table_Data,
  setTable_Data,
}: editURL_props) {
  const [Popup, openPopup] = useState<boolean>(false);

  return (
    <>
      <SimplePopup setPopup={openPopup} popup={Popup}>
        <URL_Adjustment_form
          selectedUrls={selectedUrls}
          setSelectedUrls={setSelectedUrls}
          Table_Data={Table_Data}
          setTable_Data={setTable_Data}
          Mode="edit"
          setPopup={openPopup}
        />
      </SimplePopup>
      <button
        onClick={() => openPopup((popup) => !popup)}
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "8px 16px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Edit
      </button>
    </>
  );
}