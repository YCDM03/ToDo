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

  return subtitles.map((subtitle) => {
    return (
      <ul key={subtitle + "ul"} style={ulStyle}>
        <h3 style={{ width: "100%", textAlign: "center" }}>{subtitle}</h3>
        <TodoItem list={list} subtitle={subtitle} setList={setList} />
      </ul>
    );
  });
}
