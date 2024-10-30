import React, { useState } from "react";
import { get_from_storage, set_to_storage } from "../communications";
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

const debug_storage = async () => {
  const details_from_storage = await get_from_storage();
  console.log(details_from_storage);
};
