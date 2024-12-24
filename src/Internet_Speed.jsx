import React, { useState } from "react";
import { ClipLoader } from "react-spinners"; // Import the spinner component
import { Link } from "react-router-dom";

const InternetSpeedTest = () => {
  const [loading, setLoading] = useState(false); // For loading state
  const [speedData, setSpeedData] = useState(null); // For storing results
  const [error, setError] = useState(null); // For handling errors

  // Handle the click event for "Test Internet Speed" button
  const handleTestSpeed = async () => {
    setLoading(true); // Start loading
    setSpeedData(null); // Clear previous results
    setError(null); // Clear previous error

    try {
      const response = await fetch(
        "https://sugared-grass-bedbug.glitch.me/api/speedtest"
      ); // Your backend endpoint
      const data = await response.json();

      if (response.ok) {
        setSpeedData(data); // Set new data
      } else {
        setError("Error fetching speed test data");
      }
    } catch (err) {
      setError("Error fetching speed test data");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "20px",
      }}
    >
      {/* Navigation Menu */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link> {/* Link to speed test */}
          </li>
          <li>
            <Link to="/hash">MD5 Hash</Link> {/* Link to home */}
          </li>
        </ul>
      </nav>
      <button
        onClick={handleTestSpeed}
        disabled={loading} // Disable the button while loading
        style={{
          position: "relative",
          padding: "12px 30px",
          fontSize: "18px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: loading ? "not-allowed" : "pointer",
          transition: "background-color 0.3s ease",
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {loading ? (
          <ClipLoader color="#ffffff" loading={loading} size={20} /> // Spinner inside button
        ) : (
          "Test Internet Speed"
        )}
      </button>
      {error && (
        <p style={{ color: "red", fontSize: "18px", marginTop: "20px" }}>
          {error}
        </p>
      )}{" "}
      {/* Show error message */}
      {speedData && !loading && (
        <div
          style={{
            marginTop: "40px", // Space between button and result box
            backgroundColor: "#f4f4f9",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            width: "300px",
            margin: "0 auto",
          }}
        >
          <h2 style={{ color: "#333", marginBottom: "15px", fontSize: "24px" }}>
            Speed Test Results
          </h2>

          <div style={{ marginBottom: "15px" }}>
            <strong style={{ fontSize: "18px", color: "#333" }}>
              Download:
            </strong>
            <p style={{ fontSize: "22px", color: "#4CAF50" }}>
              {speedData.download} Mbps
            </p>
          </div>

          <div style={{ marginBottom: "15px" }}>
            <strong style={{ fontSize: "18px", color: "#333" }}>Upload:</strong>
            <p style={{ fontSize: "22px", color: "#4CAF50" }}>
              {speedData.upload} Mbps
            </p>
          </div>

          <div>
            <strong style={{ fontSize: "18px", color: "#333" }}>Ping:</strong>
            <p style={{ fontSize: "22px", color: "#4CAF50" }}>
              {speedData.ping} ms
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InternetSpeedTest;
