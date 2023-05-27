import React, { useState } from "react";
import Task from "./Task";
import "./Todo.css";

export default function Todo() {
  const [task, settask] = useState("");
  const [todolist, settodolist] = useState([]);
  const add = () => {
    const Task = {
      id: todolist.length === 0 ? 1 : todolist[todolist.length - 1].id + 1,
      taskname: task,
      completed: false,
    };
    settodolist([...todolist, Task]);
  };
  const Delete = (id) => {
    const newlist = todolist.filter((task) => task.id !== id);
    settodolist(newlist);
  };
  const complete = (id) => {
    settodolist(
      todolist.map((task) => {
        if (task.id === id) {
          return { ...task, completed:true };
        } else {
          return task;
        }
      })
    );
  };
  return (
    <div className="main">
      <h1>To Do List</h1>
      <hr />
      <div className="user">
        <input
          onChange={(event) => {
            settask(event.target.value);
          }}
          type="text"
        />
        <button onClick={add} className="btn1">
          Add List
        </button>
      </div>
      {todolist.map((task) => {
        return (
          <div className="list">
            <Task completed={task.completed} complete={complete} Delete={Delete} taskname={task.taskname} id={task.id} />
          </div>
        );
      })}
    </div>
  );
}
