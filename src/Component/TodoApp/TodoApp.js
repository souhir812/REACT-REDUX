import React from "react";
import AddTask from "../AddTask/AddTask";
import TaskList from "../TaskList/TaskList";
import "./TodoApp.css";

const TodoApp = () => {
  return (
    <div>
      <div className="header">
        <h2> Todo Application </h2> 
          
      </div>
      <AddTask />
      <TaskList />
    </div>
  );
};

export default TodoApp;