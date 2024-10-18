import { useReducer, useRef } from "react";

const initialState = [];

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
}

function Todo() {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const inputRef = useRef();

  const addTodo = () => {
    const newTodo = inputRef.current.value;
    if (newTodo.trim() !== "") {
      dispatch({ type: "ADD_TODO", payload: newTodo });
      inputRef.current.value = "";
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input ref={inputRef} type="text" placeholder="Enter a task" />
      <button onClick={addTodo}>Add Task</button>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
            <button
              onClick={() => dispatch({ type: "TOGGLE_TODO", id: todo.id })}
            >
              {todo.completed ? "Undo" : "Complete"}
            </button>
            <button
              onClick={() => dispatch({ type: "REMOVE_TODO", id: todo.id })}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
