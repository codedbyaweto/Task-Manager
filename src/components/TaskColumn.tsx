import { type Task } from "../types/types.ts";
import TaskCard from "./TaskCard.tsx";
import SortToggle from "./SortToggle";
import React from "react";

type Props = {
    title: "To Do" | "In Progress" | "Done";
    tasks: Task[];
    moveTask: (id: number) => void;
    deleteTask: (id: number) => void;
}

const TaskColumn = ({ title, tasks, moveTask, deleteTask}: Props) => {
    const [sorted, setSorted] = React.useState<boolean>(false);

    const displayTasks = [...tasks]

    if(sorted) {
        displayTasks.sort((a,b) => {
            const order = {
                High: 3,
                Medium: 2,
                Low: 1
            }

            return order[b.priority] - order[a.priority];
        })
    }

    return (
        <div className="column">
            <h3>{title}({tasks.length})</h3>
            <SortToggle
                sorted={sorted}
                toggle={() => setSorted((prev) => !prev)}
            />
            {displayTasks.map((task) => (
                <TaskCard
                    key={task.id}
                    task={task}
                    moveTask={moveTask}
                    deleteTask={deleteTask}
                />
            ))}
        </div>
    )
}

export default TaskColumn;