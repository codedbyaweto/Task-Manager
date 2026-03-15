import { type Task } from "../types/types.ts";
import React,{type ChangeEvent, useState} from "react";

type Props = {
    addTask: (task: Task) => void;
}

const TaskForm = ({ addTask }: Props) => {
   const [title, setTitle] = useState<string>("");
   const [priority, setPriority] = useState<"Low" | "Medium" | "High">("Low");
   const [error, setError] = useState<string>("");

   const handleSubmit = (e: React.SubmitEvent) => {
       e.preventDefault();

       if(title.trim().length < 3) {
           setError("Title must be at least 3 characters long");
           return;
       }

       const newTask: Task = {
           id: Date.now(),
           title,
           priority,
           status: "To Do"
       }

       addTask(newTask);

       setTitle("");
       setPriority("Low");
       setError("")
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Task title"
                value={title}
                onChange={(e:  ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            />
            <select
                value={priority}
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setPriority(e.target.value as "Low" | "Medium" | "High")
                }
            >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>

            <button type="submit">Add a task</button>
            {error && <p>{error}</p>}

        </form>
    )
}

export default TaskForm;
