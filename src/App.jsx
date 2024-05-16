import "./App.css";
import TodoForm from "./components/TodoForm";

function App() {
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
      <TodoForm />
    </div>
  );
}

export default App;
