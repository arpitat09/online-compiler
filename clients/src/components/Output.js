import React from "react";

export default function Output({ output }) {
  return (
    <div style={{ marginTop: "20px", whiteSpace: "pre-wrap", border: "1px solid black", padding: "10px", background: "#f5f5f5" }}>
      <h3>Output:</h3>
      {output}
    </div>
  );
}
