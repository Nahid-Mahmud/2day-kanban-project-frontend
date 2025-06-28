import { Task } from "./task.types";

export interface Column {
  id: string;
  title: string;
  tasks: Task[];
}
