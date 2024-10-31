import { debug_storage, set_to_storage } from "../communications";
import { FocusedDetails } from "../types";
import React, { useState } from "react";

interface URL_Adjustment_form_props {
  selectedUrls: string[];
  setSelectedUrls: React.Dispatch<React.SetStateAction<string[]>>;
  Table_Data: FocusedDetails;
  setTable_Data: React.Dispatch<React.SetStateAction<FocusedDetails>>;
  Mode: "create" | "edit";
  setPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const URL_Adjustment_form = (props: URL_Adjustment_form_props) => {
  const [website, setWebsite] = useState("");
  // const [timeAllocated, setTimeAllocated] = useState<number>(0);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!website || !validateURL(website)) {
      console.log("incorrect values entered");
      return;
    }
    try {
      let updated_urls = props.Table_Data.blocked_pages;
      if (props.Mode == "edit") {
        updated_urls = props.Table_Data.blocked_pages.filter(
          (element) => element.url != props.selectedUrls[0]
        );
      }
      updated_urls = updated_urls.filter(
        (element) => element.url != website.toLowerCase()
      );
      updated_urls.push({
        url: website.toLowerCase(),
        time_remaining: 0,
        allocated_time: 0,
      });
      console.log(updated_urls);
      const new_focused_details = props.Table_Data;
      new_focused_details.blocked_pages = updated_urls;
      await set_to_storage(new_focused_details);
      props.setTable_Data(new_focused_details);
      console.log(props.Table_Data.blocked_pages);
      props.setSelectedUrls([]);
      props.setPopup(false);
      await debug_storage();
    } catch {
      return;
    }
  };

  return (
    <div
      style={{
        width: "400px",
        padding: "20px",
        boxSizing: "border-box",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div>
          <label
            htmlFor="website"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Website:
          </label>
          <input
            type="text"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            placeholder="Enter website URL: e.g. google.com or https://google.com"
            required
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            marginTop: "auto",
          }}
        >
          {props.Mode === "create" ? "Add Website" : "Update Website"}
        </button>
      </form>
    </div>
  );
};

export default URL_Adjustment_form;

//irrespective of https:// checks if something is probably a url
const validateURL = (url: string) => {
  const urlPattern =
    /^(https?:\/\/)?([\w-]+(\.[\w-]+)+\/?)([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/;

  return urlPattern.test(url);
};
