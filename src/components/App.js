import { useEffect, useState } from "react";
import Editor from "./Editor.js";
import useLocalstorage from "../hooks/useLocalstorage.js";

function App() {
  const [html, setHtml] = useLocalstorage("html", "");
  const [css, setCss] = useLocalstorage("css", "");
  const [js, setJs] = useLocalstorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    let timeOut = setTimeout(() => {
      setSrcDoc(
        `  <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>`
      );
    }, 250);

    return () => clearTimeout(timeOut);
  }, [html, css, js]);

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
          srcDoc={srcDoc}
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
