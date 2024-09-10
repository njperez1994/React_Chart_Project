import { createContext, useState } from "react";
import { tareas as data } from "../data/task";

//Impotando useEffect para Inicializar Un componente
import { useEffect } from "react";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tarea, setTarea] = useState([]);

  function createTask(taskTitle, taskDescription) {
    setTarea([
      ...tarea,
      {
        title: taskTitle,
        id: tarea.length,
        description: taskDescription,
      },
    ]);
  }

  function deleteTask(id) {
    setTarea(tarea.filter((n) => n.id !== id));
  }
  //Utilizando el usseEfect para inicializar el arreglo con los datos que se tienen en fichero cuando se cree el componente

  useEffect(() => {
    setTarea(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tarea: tarea,
        createTask: createTask,
        deleteTask: deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
