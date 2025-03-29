import React, { useState } from "react";
import "./App.css";

type Priority = "low" | "normal" | "high";

interface Todo {
  id: number;
  text: string;
  priority: Priority;
  completed: boolean;
}

const App: React.FC = () => {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState<Priority>("normal");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = () => {
    if (text.trim() === "") return;
    const newTodo: Todo = {
      id: Date.now(),
      text,
      priority,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setText("");
    setPriority("normal");
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="app-container">
      <h1>My Wishlist 🎄🎁</h1>
      <div className="input-group">
        <input
          type="text"
          placeholder="Write your wish..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value as Priority)}
        >
          <option value="low">Low</option>
          <option value="normal">Normal</option>
          <option value="high">High</option>
        </select>
        <div>
          <button onClick={handleAdd}>Add wish</button>
        </div>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`todo-item ${todo.priority} ${
              todo.completed ? "completed" : ""
            }`}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(todo.id)}
            />
            <span>{todo.text}</span>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {todos.length === 0 && <p>Santa's inbox is empty!</p>}
    </div>
  );
};

export default App;
