//todo list

import React, { useState } from "react";

export default function App() {
  const [todo, settodo] = useState([]);
  const [task, setTask] = useState("");

  const addTodo = () => {
    if (task.trim() === "") return;
    settodo([{ text: task }, ...todo]);
    setTask("");
  };

  const deleteTodo = (ind) => {
    const newtodo = todo.filter((_, i) => i !== ind);
    settodo(newtodo);
  };
   return (
    <div>
   <h2>TO-DO List</h2>
      <nav>
        <input
          type="text"
          placeholder="Enter text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTodo}>ADD</button>
      </nav>

      <ul>
        {todo.map((todo, ind) => (
          <li key={ind}>
            {todo.text}
            <button onClick={() => deleteTodo(ind)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}