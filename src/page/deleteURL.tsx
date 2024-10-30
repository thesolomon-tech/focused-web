import React from "react";
import { get_from_storage, set_to_storage } from "../communications";
import { FocusedDetails } from "../types";
interface deleteURLProps {
  selectedUrls: string[];
  setSelectedUrls: React.Dispatch<React.SetStateAction<string[]>>;
  Table_Data: FocusedDetails;
  setTable_Data: React.Dispatch<React.SetStateAction<FocusedDetails>>;
}

export default function DeleteURL({
  selectedUrls,
  setSelectedUrls,
  Table_Data,
  setTable_Data,
}: deleteURLProps) {
  const handleDelete = async () => {
    try {
      //filter the main table array
      const new_blocked_pages = Table_Data.blocked_pages.filter(
        (element) =>
          !selectedUrls.some((selectedItem) => selectedItem == element.url)
      );
      await set_to_storage({ ...Table_Data, blocked_pages: new_blocked_pages });
      await debug_storage();
      setSelectedUrls([]);
      setTable_Data({ ...Table_Data, blocked_pages: new_blocked_pages });
    } catch (error) {
      console.error("Error deleting URL:", error);
    }
  };

  return (
    <button
      onClick={handleDelete}
      style={{
        backgroundColor: "red",
        color: "white",
        padding: "8px 16px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      Delete
    </button>
  );
}

const debug_storage = async () => {
  const details_from_storage = await get_from_storage();
  console.log(details_from_storage);
};
