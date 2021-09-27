import "./App.css";
import { Graph } from "react-d3-graph";
import Editor from "./Components/Editor";
import { useState } from "react";
import Navbar from "./Components/NavBar/Navbar";
import GraphOutput from "./Components/GraphOutput";



function App() {

  const [html,setHtml]=useState('')
  return (
    <>
    <Navbar/>
      <div className="pane top-pane">
        <Editor language="javascript" displayName="Java Script" value={html} onChange={setHtml}/>
       
        <GraphOutput/>
      </div>
    </>
  );
}

export default App;
