export interface Task {
  id: string
  title: string
  description: string
  priority: "low" | "medium" | "high"
  assignee?: string
  dueDate?: string
  createdDate: string
}
