import React from "react";

const SimplePopup = ({
  popup,
  setPopup,
  children,
}: {
  popup: boolean;
  setPopup: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}) => {
  return (
    <>
      {popup ? (
        <div>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 999,
            }}
            onClick={() => setPopup(false)}
          />

          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              zIndex: 1000,
            }}
          >
            {children}
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                onClick={() => setPopup(false)}
                style={{
                  padding: "4px 12px",
                  marginTop: 4,
                  backgroundColor: "#6B7280",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  fontSize: "14px",
                  cursor: "pointer",
                  transition: "background-color 0.2s",
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SimplePopup;
