import React, { useState,useContext } from "react";
import {TaskContext} from '../context/TaskContext'


function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {createTask} = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
    <form onSubmit={handleSubmit} className="bg-neutral-700 mt p-10 mb-5">
      <h1 className="text-2xl font-bold mb-3 text-white text-center">CREA TU TAREA</h1>
      <input className="bg-slate-300 p-3 w-full
       mb-2"
        placeholder="Escribe tu tarea"
        onChange={(e) => 
          setTitle(e.target.value)}
          value = { title }
          autoFocus
        
      />
      <textarea className="bg-slate-300 p-3 w-full
       mb-1"
        placeholder="Describí la tarea"
        onChange={(e) => 
          setDescription(e.target.value)}
          value = { description }
        
      ></textarea>
      <button className='bg-lime-700 px-1 py-1 rounded-md mt-4 hover:bg-lime-500 w-full text-white'>Guardar</button>
    </form>
    </div>
  );
}

export default TaskForm;
