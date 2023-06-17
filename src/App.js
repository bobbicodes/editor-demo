import React, { useEffect, useRef } from "react";
import { EditorState, EditorView, basicSetup } from "@codemirror/basic-setup";
import { javascript } from "@codemirror/lang-javascript";

export default function App() {
  const editor = useRef();

  useEffect(() => {
    const log = (event) => console.log(event);
    // uncomment this addEventListener and things will break
    // document.body.addEventListener("input", log);

    const state = EditorState.create({
      doc: "a ",
      extensions: [basicSetup, javascript()]
    });
    const view = new EditorView({ state, parent: editor.current });
    return () => {
      view.destroy();
      document.body.removeEventListener("input", log);
    };
  }, []);

  return (
    <div className="App">
      <p>
        Codemirror 6 Clojure demo
      </p>
      <div ref={editor}></div>
    </div>
  );
}
