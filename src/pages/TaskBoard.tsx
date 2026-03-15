import {useState} from "react";
import {type Task} from "../types/types.ts";
import TaskColumn from "../components/TaskColumn.tsx";
import TaskForm from "../components/TaskForm.tsx";
import withAuth from "../hoc/withAuth.tsx";

const ProtectedForm = withAuth(TaskForm);

const TaskBoard = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const addTask = (task: Task) => {
        setTasks((prev) => [...prev, task]);
    };

    const deleteTask = (id: number) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    };

    const moveTask = (id: number) => {
        setTasks((prev) =>
            prev.map((task) => {
                if (task.id !== id) return task;

                if (task.status === "To Do") {
                    return {...task, status: "In Progress"};
                }

                if (task.status === "In Progress") {
                    return {...task, status: "Done"};
                }

                return task;
            })
        );
    };

    const todo = tasks.filter((task) => task.status === "To Do");
    const progress = tasks.filter((task) => task.status === "In Progress");
    const done = tasks.filter((task) => task.status === "Done");

    return (
        <div className="app">
            <ProtectedForm addTask={addTask} isLoggedIn={isLoggedIn}/>


            {isLoggedIn && (
                <div className="board">
                    <TaskColumn
                        title="To Do"
                        tasks={todo}
                        moveTask={moveTask}
                        deleteTask={deleteTask}
                    />

                    <TaskColumn
                        title="In Progress"
                        tasks={progress}
                        moveTask={moveTask}
                        deleteTask={deleteTask}
                    />

                    <TaskColumn
                        title="Done"
                        tasks={done}
                        moveTask={moveTask}
                        deleteTask={deleteTask}
                    />
                </div>
            )}
            <button onClick={() => setIsLoggedIn((prev) => !prev)}>
                {isLoggedIn ? "Logout" : "Login"}
            </button>
        </div>
    );
};

export default TaskBoard;