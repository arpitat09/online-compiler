import React from "react";

export default function Editor({ code, setCode }) {
  return (
    <textarea
      value={code}
      onChange={(e) => setCode(e.target.value)}
      placeholder="Write your JavaScript code here..."
      rows={15}
      cols={80}
      style={{ fontFamily: "monospace", fontSize: "16px" }}
    />
  );
}
