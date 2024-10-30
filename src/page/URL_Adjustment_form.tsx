import { FocusedDetails } from "../types";
import React, { useState } from "react";

interface URL_Adjustment_form_props {
  selectedUrls: string[];
  setSelectedUrls: React.Dispatch<React.SetStateAction<string[]>>;
  Table_Data: FocusedDetails;
  setTable_Data: React.Dispatch<React.SetStateAction<FocusedDetails>>;
  Mode: "create" | "edit";
}

const URL_Adjustment_form = (props: URL_Adjustment_form_props) => {
  const [website, setWebsite] = useState("");
  const [timeAllocated, setTimeAllocated] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will go here
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
            type="url"
            id="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            placeholder="Enter website URL"
            required
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div>
          <label
            htmlFor="timeAllocated"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Time Allocated (minutes):
          </label>
          <input
            type="number"
            id="timeAllocated"
            value={timeAllocated}
            onChange={(e) => setTimeAllocated(e.target.value)}
            placeholder="Enter time in minutes"
            required
            min="1"
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
