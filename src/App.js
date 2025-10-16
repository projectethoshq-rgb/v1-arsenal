// ~/Desktop/v1-arsenal/src/App.js
import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App" style={{ padding: 40, textAlign: "center" }}>
      <h1>v1-arsenal</h1>
      <p>You're editing <code>src/App.js</code>. Save to hot-reload.</p>
      <button onClick={() => alert("Hot reload works — nice!")}>Click me</button>
    </div>
  );
}
