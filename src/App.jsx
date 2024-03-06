import "reactflow/dist/style.css"
import { useCallback } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1"} },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2"} },
];

const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

export default function App() {

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );
  
  return (
    <article style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow 
        nodes={nodes} 
        edges={edges} 
        onConnect={onConnect}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </article>
  )
}