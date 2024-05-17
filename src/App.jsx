import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  return (
    <div
      className="Layout"
      style={{
        maxWidth: "1200px",
        minWidth: "800px",
        margin: "0 auto",
        padding: "0px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#1a4568",
      }}
    >
      <TodoForm list={list} setList={setList} />
      <TodoList list={list} setList={setList} />
    </div>
  );
}

export default App;
