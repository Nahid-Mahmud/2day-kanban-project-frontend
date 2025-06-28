"use client";

import { useState } from "react";
import KanbanColumn from "./KanbanColumn";

const initialData = {
  TODO: [{ id: "1", content: "Setup project" }],
  "In Progress": [{ id: "2", content: "Build Board UI" }],
  Review: [],
  Done: [],
};

type Task = { id: string; content: string };
type Columns = { [key: string]: Task[] };

export default function KanbanBoard() {
  const [columns, setColumns] = useState<Columns>(initialData);

  const handleDrop = (toColumn: string, taskId: string) => {
    const task = Object.values(columns)
      .flat()
      .find((t) => t.id === taskId);
    // console.log(Object.values(columns).flat());

    if (!task) return;

    const newColumns = { ...columns };
    Object.keys(newColumns).forEach((col) => {
      newColumns[col] = newColumns[col].filter((t) => t.id !== taskId);
    });
    newColumns[toColumn].push(task);
    setColumns(newColumns);

    console.log(
      Object.keys(newColumns).forEach((clg) => {
        console.log(
          clg,
          newColumns[clg].filter((t) => t.id === taskId)
        );
      })
    );
  };

  return (
    <div className="flex gap-4">
      {Object.entries(columns).map(([title, tasks]) => (
        <KanbanColumn key={title} title={title} tasks={tasks} onDrop={(taskId: string) => handleDrop(title, taskId)} />
      ))}
    </div>
  );
}
