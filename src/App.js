import "./App.css";
import { Graph } from "react-d3-graph";
import Editor from "./Components/Editor";
import { useState } from "react";


function App() {

  const [html,setHtml]=useState('')
  return (
    <>
      <div className="pane top-pane">
        <Editor language="xml" displayName="HTML" value={html} onChange={setHtml}/>
        <Editor />
      </div>
    </>
  );
}

export default App;
