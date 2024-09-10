import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext"

function TaskList() {
 
  //console.log(tarea)
  //Importando useContext
  const { tarea } = useContext(TaskContext)

  if (tarea.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">Not has Task Defined</h1>;
  }   
  return (
    <div className="grid grid-cols-4 gap-2">
      {tarea.map((e) => (
        <TaskCard task={e} key={e.id} />
      ))}      
    </div>
  );
}

export default TaskList;
