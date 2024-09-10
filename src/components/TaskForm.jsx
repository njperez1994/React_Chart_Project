import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [newtarea, setNewTarea] = useState("");
  const [descript, setDescript] = useState("");

  //utilizando El context para acceder a createTask
  const { createTask } = useContext(TaskContext);

  //console.log(createTask)

  const handlerForm = (e) => {
    e.preventDefault();
    createTask(newtarea, descript);
    setNewTarea("");
    setDescript("");
  };

  return (
    <div className="max-w-md mx-auto">      
      <form className="bg-slate-800 p-10 mb-4 " onSubmit={handlerForm}>
      <h1 className="tex-2xl font-bold text-white mb-3">Create a Purchase or Sale Order</h1>
        <input
          autoFocus
          onChange={(e) => {
            //console.log(e.target.value)
            setNewTarea(e.target.value);
          }}
          value={newtarea}
          placeholder="Order Name"
          className="bg-slate-300 p-3 w-full mb-2"
        ></input>
        <textarea
          placeholder="Order Description"
          onChange={(d) => {
            //console.log(d.target.value)
            setDescript(d.target.value);
          }}
          value={descript}
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Save</button>
      </form>
    </div>
  );
}

export default TaskForm;
