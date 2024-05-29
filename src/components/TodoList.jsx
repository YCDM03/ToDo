import TodoItem from "./TodoItem";

export default function TodoList({ list, setList }) {
  const workingList = list.filter((item) => {
    return !item.isDone;
  });
  const doneList = list.filter((item) => {
    return item.isDone;
  });

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
  return (
    <>
      {subtitles.map((subtitle) => {
        return (
          <ul key={subtitle + "ul"} style={ulStyle}>
            <h3 style={{ width: "100%", textAlign: "center" }}>{subtitle}</h3>
            <TodoItem
              filteredList={subtitle === "Working" ? workingList : doneList}
              setList={setList}
            />
          </ul>
        );
      })}
    </>
  );
}
