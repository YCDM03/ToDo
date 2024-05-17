import TodoItem from "./TodoItem";

export default function TodoList({ list, setList }) {
  //ul style
  const ulStyle = {
    width: "100%",
    minHeight: "220px",
    listStyle: "none",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "start",
  };

  const subtitles = ["Working", "Done"];

  const deleteTodo = (id) => {
    setList(
      list.filter((e) => {
        return e.id !== id;
      })
    );
  };

  const changeDone = (item) => {
    const { id, isDone } = item;
    const items = list.filter((e) => {
      return e.id !== id;
    });
    setList([...items, { ...item, isDone: !isDone }]);
  };

  return subtitles.map((subtitle) => {
    return (
      <ul key={subtitle + "ul"} style={ulStyle}>
        <h3 style={{ width: "100%", textAlign: "center" }}>{subtitle}</h3>
        <TodoItem
          list={list.filter(({ isDone }) => {
            return subtitle === "Working" ? !isDone : isDone;
          })}
          deleteTodo={deleteTodo}
          changeDone={changeDone}
        />
      </ul>
    );
  });
}
