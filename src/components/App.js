import React, { useState } from "react";
import Editor from "./Editor.js";
import "./../App.css";

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  return (
    <>
      <div className="pane top-pane">
        <Editor
          displayTitle="HTML"
          language="xml"
          value={html}
          onChange={setHtml}
        />
        <Editor
          displayTitle="Css"
          language="css"
          value={css}
          onChange={setCss}
        />

        <Editor
          displayTitle="JS"
          language="javascript"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="pane">
        <iframe
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </>
  );
}

export default App;
