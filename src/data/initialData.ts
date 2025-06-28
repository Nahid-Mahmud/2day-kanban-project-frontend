import { Column } from "@/types/column.types";

export const initialData: Column[] = [
  {
    id: "todo",
    title: "To Do",
    tasks: [
      {
        id: "1",
        title: "Design Homepage",
        description: "Create wire frames and mockups for the homepage",
        priority: "high",
        assignee: "Alice",
        dueDate: "2024-12-30",
        createdDate: "2024-12-24",
      },
      {
        id: "2",
        title: "Setup Database",
        description: "Configure PostgreSQL database and migrations",
        priority: "medium",
        assignee: "Bob",
        dueDate: "2024-12-28",
        createdDate: "2024-12-23",
      },
    ],
  },
  {
    id: "inprogress",
    title: "In Progress",
    tasks: [
      {
        id: "3",
        title: "Implement Authentication",
        description: "Add user login and registration functionality",
        priority: "high",
        assignee: "Charlie",
        dueDate: "2024-12-27",
        createdDate: "2024-12-22",
      },
    ],
  },
  {
    id: "review",
    title: "Review",
    tasks: [
      {
        id: "4",
        title: "Code Review API",
        description: "Review the REST API implementation",
        priority: "medium",
        assignee: "Diana",
        dueDate: "2024-12-26",
        createdDate: "2024-12-21",
      },
    ],
  },
  {
    id: "done",
    title: "Done",
    tasks: [
      {
        id: "5",
        title: "Project Setup",
        description: "Initialize Next.js project with TypeScript",
        priority: "low",
        assignee: "Eve",
        dueDate: "2024-12-25",
        createdDate: "2024-12-20",
      },
    ],
  },
];
