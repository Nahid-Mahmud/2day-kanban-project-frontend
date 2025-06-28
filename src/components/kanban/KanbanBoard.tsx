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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const task = Object.entries(columns).flatMap(([col, tasks]) => tasks.filter((t) => t.id === taskId))[0];

    if (!task) return;

    const newColumns = { ...columns };
    for (const col in newColumns) {
      newColumns[col] = newColumns[col].filter((t) => t.id !== taskId);
    }
    newColumns[toColumn].push(task);
    setColumns(newColumns);
  };

  return (
    <div className="flex gap-4">
      {Object.entries(columns).map(([title, tasks]) => (
        <KanbanColumn key={title} title={title} tasks={tasks} onDrop={(taskId: string) => handleDrop(title, taskId)} />
      ))}
    </div>
  );
}
