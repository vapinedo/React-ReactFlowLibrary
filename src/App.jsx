import "reactflow/dist/style.css"
import ReactFlow, { useNodesState, useEdgesState, addEdge } from "reactflow"
import { useState } from "react";
import { useCallback } from "react";

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1"} },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2"} },
];

const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

export default function App() {

  const [nodes, setNodes, onNodesChange] = useState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );
  
  return (
    <article style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow 
        nodes={initialNodes} 
        edges={initialEdges} 
        onConnect={onConnect}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
      />
    </article>
  )
}