import React, { useState } from "react";
import '../styles/TODO.css';
import Task from './Task.js';
import TaskForm from "./TaskForm.js";

function TODO() {

  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    if (task.text.trim()) {
      task.text = task.text.trim();
      const updatedTasks = [task, ...tasks];
      setTasks(updatedTasks);
    }
  };

  const deleteTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  const completeTask = id => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-container">
      <h1>My Tasks</h1>
      <TaskForm onSubmit={addTask} />
      <div className="task-list-container">
        {
          tasks.map(task => (
            <Task
              key={task.id}
              id={task.id}
              text={task.text}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          ))
        }
      </div>
      
      
    </div> 
  );
}

export default TODO;