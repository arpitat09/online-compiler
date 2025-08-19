import React, { useState } from "react";
import axios from "axios";
import Editor from "./components/Editor";
import Output from "./components/Output";
import "./App.css";

function App() {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const runCode = async () => {
    try {
      const res = await axios.post("http://localhost:5000/compile", { code });
      setOutput(res.data.output);
    } catch (err) {
      setOutput(err.message);
    }
  };

  return (
    <div className="app">
      <h1>Online JS Compiler</h1>
      <Editor code={code} setCode={setCode} />
      <button onClick={runCode}>Run Code</button>
      <Output output={output} />
    </div>
  );
}

export default App;
