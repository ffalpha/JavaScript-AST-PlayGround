
import React, { useState } from "react";
import { Graph } from "react-d3-graph";

// graph payload (with minimalist structure)
const data = {
  nodes: [{ id: "Harry" }, { id: "Sally" }, { id: "Alice" }],
  links: [
    { source: "Harry", target: "Sally" },
    { source: "Harry", target: "Alice" },
  ],
};

// the graph configuration, just override the ones you need
const myConfig = {
    focusedNodeId: "nodeIdToTriggerZoomAnimation",
 
  directed: true,
  nodeHighlightBehavior: true,
  node: {
    color: "red",
    size: 120,
    
  },
  link: {
    highlightColor: "green",
  },
     width:800
};

// const onClickGraph = function(event) {
//     window.alert('Clicked the graph background');
// };

// const onClickNode = function(nodeId, node) {
//     window.alert('Clicked node ${nodeId} in position (${node.x}, ${node.y})');
// };

// const onDoubleClickNode = function(nodeId, node) {
//     window.alert('Double clicked node ${nodeId} in position (${node.x}, ${node.y})');
// };

// const onRightClickNode = function(event, nodeId, node) {
//     window.alert('Right clicked node ${nodeId} in position (${node.x}, ${node.y})');
// };

// const onMouseOverNode = function(nodeId, node) {
//     window.alert(`Mouse over node ${nodeId} in position (${node.x}, ${node.y})`);
// };

// const onMouseOutNode = function(nodeId, node) {
//     window.alert(`Mouse out node ${nodeId} in position (${node.x}, ${node.y})`);
// };

// const onClickLink = function(source, target) {
//     window.alert(`Clicked link between ${source} and ${target}`);
// };

// const onRightClickLink = function(event, source, target) {
//     window.alert('Right clicked link between ${source} and ${target}');
// };

// const onMouseOverLink = function(source, target) {
//     window.alert(`Mouse over in link between ${source} and ${target}`);
// };

// const onMouseOutLink = function(source, target) {
//     window.alert(`Mouse out link between ${source} and ${target}`);
// };

// const onNodePositionChange = function(nodeId, x, y) {
//     window.alert(`Node ${nodeId} moved to new position x= ${x} y= ${y}`);
// };

// Callback that's called whenever the graph is zoomed in/out
// @param {number} previousZoom the previous graph zoom
// @param {number} newZoom the new graph zoom
const onZoomChange = function(previousZoom, newZoom) {
    console.log("ASDS")
    window.alert(`Graph is now zoomed at ${newZoom} from ${previousZoom}`);
};
const GraphOutput = () => {
    const xPx = 50;
    const yPercent = 50;
    const [pos, setPos] = useState({ x: 0, y: 0, scale: 1 });
    const onScroll = (e) => {
       
        const delta = e.deltaY * -0.01;
        const newScale = pos.scale + delta;
    
        const ratio = 1 - newScale / pos.scale;
    
        setPos({
          scale: newScale,
          x: pos.x ,
          y: pos.y 
        });
 
      };
  return (
    <div className="editor-container2">
      <div className="editor-title">
        Output 
      </div><div onWheelCapture={onScroll}   style={{
      
          transform: `translate(${pos.x}px, ${pos.y}px) scale(${pos.scale})`
        }}  >
        <Graph 
     id='graph-id' // id is mandatory, if no id is defined rd3g will throw an error
     data={data}
     config={myConfig}
    //  onClickGraph={onClickGraph}
    //  onClickNode={onClickNode}
    //  onDoubleClickNode={onDoubleClickNode}
    //  onRightClickNode={onRightClickNode}
    //  onClickLink={onClickLink}
    //  onRightClickLink={onRightClickLink}
    //  onMouseOverNode={onMouseOverNode}
    //  onMouseOutNode={onMouseOutNode}
    //  onMouseOverLink={onMouseOverLink}
    //  onMouseOutLink={onMouseOutLink}
    //  onNodePositionChange={onNodePositionChange}
     onZoomChange={onZoomChange}/>
      ;
    </div>
    
    
    </div>
   
  );
};

export default GraphOutput;
