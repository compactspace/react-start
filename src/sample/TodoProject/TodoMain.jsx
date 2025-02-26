import { TodoAdd } from "../../sample/TodoProject/TodoAdd";
import { TodoList } from "../../sample/TodoProject/TodoList";
import todoData from "../../common/todoData";
import { useState, useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer.useReducer";
export const TodoMain = () => {
  //const [tasks, setTasks] = useState(todoData);

 const [tasks,dispatch]=useReducer(todoReducer,todoData);

const handleAddTasck = (text)=>{
    dispatch({
        type:'add',
        id:tasks.length>0 ?tasks[tasks.length-1].id +1 : 1 ,
        text:text
    })
}


const handleChangeTask = (task)=>{
    dispatch({
        type:'change',
        task:task
    })
}


const handleDeleteTask = (taskId) => {
    dispatch({
        type:'delete',
        id:taskId
    })
  };


  return (
    <>
      <h1>todo project</h1>

      <TodoAdd onAddTask={handleAddTasck} />
      <TodoList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} />
    </>
  );
};
