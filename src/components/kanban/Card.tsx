"use client";

import { useDrag } from "react-dnd";

export default function Card({ id, content }: { id: string; content: string }) {
  const [{ isDragging }, dragRef] = useDrag({
    type: "CARD",
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  // Type dragRef as a callback ref to satisfy React's ref typing
  const setDragRef = (node: HTMLDivElement | null) => {
    dragRef(node);
  };

  return (
    <div ref={setDragRef} className={`p-2 rounded bg-white shadow mb-2 cursor-move ${isDragging ? "opacity-50" : ""}`}>
      {content}
    </div>
  );
}
