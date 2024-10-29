import React, { useState } from "react";
import { Clock, RefreshCcw, Globe } from "lucide-react";
import { FocusedDetails } from "../types";

const FocusedTable = () => {
  const [selectedUrls, setSelectedUrls] = useState<string[]>([]);

  const sampleData: FocusedDetails = {
    blocked_pages: [
      { url: "facebook.com", time_remaining: 30, allocated_time: 60 },
      { url: "twitter.com", time_remaining: 45, allocated_time: 90 },
    ],
    youtube_settings: {
      show_comments: false,
      show_suggestions: false,
    },
    authenticated: true,
  };

  const handleSelectAll = () => {
    if (selectedUrls.length === sampleData.blocked_pages.length) {
      setSelectedUrls([]);
    } else {
      setSelectedUrls(sampleData.blocked_pages.map((page) => page.url));
    }
  };

  const handleRowSelect = (url: string) => {
    setSelectedUrls((prev) => {
      if (prev.includes(url)) {
        return prev.filter((selectedUrl) => selectedUrl !== url);
      }
      return [...prev, url];
    });
  };

  return (
    <div className="table-container">
      <table className="focus-table">
        <thead>
          <tr className="header-row">
            <th className="table-header">
              <input
                type="checkbox"
                className="checkbox"
                checked={
                  selectedUrls.length === sampleData.blocked_pages.length
                }
                onChange={handleSelectAll}
              />{" "}
            </th>
            <th className="table-header">
              <div className="header-content">
                <Globe className="icon" />
                Website
              </div>
            </th>
            <th className="table-header">
              <div className="header-content">
                <Clock className="icon" />
                Time Remaining
              </div>
            </th>
            <th className="table-header">
              <div className="header-content">
                <Clock className="icon" />
                Time Allocated
              </div>
            </th>
            <th className="table-header">
              <div className="header-content">
                <RefreshCcw className="icon" />
                Reset
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {sampleData.blocked_pages.map((page, index) => (
            <tr key={index} className="table-row">
              <td className="table-cell">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={selectedUrls.includes(page.url)}
                  onChange={() => handleRowSelect(page.url)}
                />{" "}
              </td>
              <td className="table-cell">{page.url}</td>
              <td className="table-cell">{page.time_remaining} min</td>
              <td className="table-cell">{page.allocated_time} min</td>
              <td className="table-cell">
                <button className="reset-button">
                  <RefreshCcw className="icon" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <style>
        {`
          .table-container {
            width: 100%;
          }
          
          .focus-table {
            width: 100%;
            min-width: 100%;
            background-color: white;
            border: 1px solid #e5e7eb;
          }
          
          .header-row {
            background-color: #f9fafb;
          }
          
          .table-header {
            padding: 1rem;
            text-align: left;
            font-weight: 500;
            color: #4b5563;
          }
          
          .header-content {
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }
          
          .table-row {
            border-top: 1px solid #f3f4f6;
          }
          
          .table-cell {
            padding: 1rem;
            color: #1f2937;
          }
          
          .checkbox {
            width: 1rem;
            height: 1rem;
            border-radius: 0.25rem;
            border: 1px solid #d1d5db;
          }
          
          .icon {
            width: 1rem;
            height: 1rem;
          }
          
          .reset-button {
            color: #2563eb;
            background: none;
            border: none;
            cursor: pointer;
          }
          
          .reset-button:hover {
            color: #1d4ed8;
          }
        `}
      </style>
    </div>
  );
};

export default FocusedTable;
