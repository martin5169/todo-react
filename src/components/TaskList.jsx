import React, { useContext } from "react";
import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";

function TaskList() {

const {tasks} = useContext(TaskContext)

  if (tasks.length === 0) 
    return <h1 className="text-white font-bold text-center">SIN TAREAS</h1>;
  

  return (
    <div className="my-1 py-1 mr-1 ">
      {tasks.map((task) => (
        <div key={task.id}>
          <TaskCard key={task.id} task={task}/>
          </div>
      ))}
    </div>
  );
}

export default TaskList;
