import React from 'react';
import "./Todo.css"

export default function Task(props) {
    return (
        <div className="list">
          <div>
            <p style={{background: props.completed ? "#75E6DA" : "#05263B",color:props.completed ? "#05263B":"#75E6DA"}}>{props.taskname}</p>
          </div>

          <div className="box">
            <button onClick={() => props.complete(props.id)} className="complete">
              Completed
            </button>
            <button onClick={() => props.Delete(props.id)} className="btn2">
              X
            </button>
          </div>
        </div>
      );
}
