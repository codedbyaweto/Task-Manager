export type Task = {
    id: number;
    title: string;
    priority: "Low" | "Medium" | "High";
    status: "To Do" | "In Progress" | "Done";
}