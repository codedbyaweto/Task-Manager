import {type Task} from "../types/types.ts";

type Props = {
    task: Task,
    moveTask: (id: number) => void,
    deleteTask: (id: number) => void,
}

const TaskCard = ({ task, moveTask, deleteTask }: Props) => {
    return (
        <div className="task-card">
            <h4>{task.title}</h4>
            <p>Priority: {task.priority}</p>

            <button onClick={() => moveTask(task.id)} disabled={task.status === "Done"}>Move</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
    )
}

export default TaskCard;