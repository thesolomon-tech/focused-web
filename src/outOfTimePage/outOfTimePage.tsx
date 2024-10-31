import React, { useState, useEffect } from "react";

const OutOfTimePage = () => {
  const [originalUrl, setOriginalUrl] = useState("");

  useEffect(() => {
    // Get URL parameter
    const params = new URLSearchParams(window.location.search);
    const url = params.get("originalUrl") || "";
    setOriginalUrl(url);
  }, []);

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#f3f4f6",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "1rem",
    },
    card: {
      width: "100%",
      maxWidth: "28rem",
      backgroundColor: "white",
      borderRadius: "0.5rem",
      boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
      padding: "2rem",
    },
    header: {
      textAlign: "center",
      marginBottom: "2rem",
    },
    clockIcon: {
      width: "3rem",
      height: "3rem",
      margin: "0 auto 1rem auto",
      color: "#ef4444",
    },
    title: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#111827",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
    text: {
      textAlign: "center",
      color: "#4b5563",
    },
    url: {
      textAlign: "center",
      fontSize: "0.875rem",
      color: "#6b7280",
      wordBreak: "break-all",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          {/* Replace Clock component with text or your own clock icon */}
          <div style={styles.clockIcon}>⏰</div>
          <h1 style={styles.title}>Time's Up!</h1>
        </div>
        <div style={styles.content}>
          <p style={styles.text}>You've reached your time limit on:</p>
          <p style={styles.url}>{originalUrl}</p>
          <div style={styles.text}>
            {/* <p>Come back tomorrow!</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutOfTimePage;
