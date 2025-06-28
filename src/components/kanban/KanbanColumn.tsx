/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useDrop } from "react-dnd";
import Card from "./Card";
import { useRef, useEffect } from "react";

export default function KanbanColumn({ title, tasks, onDrop }: any) {
  const divRef = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: "CARD",
    drop: (item: { id: string }) => {
      onDrop(item.id);
    },
  });

  useEffect(() => {
    if (divRef.current) {
      drop(divRef.current);
    }
  }, [drop]);

  return (
    <div ref={divRef} className="w-64 p-4 bg-gray-100 rounded-lg">
      <h2 className="font-bold text-lg mb-2">{title}</h2>
      {tasks.map((task: any) => (
        <Card key={task.id} {...task} />
      ))}
    </div>
  );
}
