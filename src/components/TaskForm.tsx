import { type Task } from "../types/types.ts";
import React,{type ChangeEvent, type FormEvent, useState} from "react";

type Props = {
    addTask: (task: Task) => void;
}

const TaskForm = ({ addTask }: Props) => {
   const [title, setTitle] = useState<string>("");
   const [priority, setPriority] = useState("Low");
   const [error, setError] = useState<string>("");

   const handleSubmit = (e: React.FormEvent) => {
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
                onChange={(e:  ChangeEvent<HTMLSelectElement>) => setPriority(e.target.value)}
            >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>
            <button type="submit">Add a task</button>
            {error && <p>{error}</p>}

        </form>
    )
}

export default TaskForm;