import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "codemirror/addon/lint/lint.css";
import { Controlled } from "react-codemirror2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";

function Editor(props) {
  const { displayTitle, value, onChange, language } = props;
  function handleChange(editor, data, value) {
    onChange(value);
  }
  const [open, setOpen] = useState(true);
  return (
    <div className={`editor-container ${open ? " " : " collasped"}`}>
      <div className="editor-title">
        {displayTitle}
        <button
          type="button"
          className="expand-collasped-btn"
          onClick={() => setOpen((prevOpen) => !prevOpen)}
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
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
