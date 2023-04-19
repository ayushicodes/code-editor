import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "codemirror/addon/lint/lint.css";
import { Controlled } from "react-codemirror2";

function Editor(props) {
  const { displayTitle, value, onChange, language } = props;
  function handleChange(editor, data, value) {
    onChange(value);
  }
  return (
    <div className="editor-container">
      <div className="editor-title">
        {displayTitle}
        <button>O/C</button>
      </div>
      <Controlled
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          mode: language,
          lint: true,
          lineNumbers: true,
          lineWrapping: true,
          theme: "material",
        }}
      />
    </div>
  );
}
export default Editor;
