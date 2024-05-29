export default function TodoItem({ filteredList, list, setList }) {
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

  return filteredList.map((item) => {
    const { id, title, content, isDone } = item;

    return (
      <li
        style={{
          width: "20%",
          textAlign: "center",
          border: "2px solid white",
          margin: "10px",
          display: "flex",
          flexDirection: "column",
        }}
        key={id}
      >
        <h3 style={{ marginTop: "5px" }}>{title}</h3>
        <p>{content}</p>
        <div style={{ width: "100%", marginTop: "auto" }}>
          <button
            style={{ width: "50%" }}
            onClick={() => {
              deleteTodo(id);
            }}
          >
            삭제하기
          </button>
          <button
            style={{ width: "50%" }}
            onClick={() => {
              changeDone(item);
            }}
          >
            {isDone ? "취소" : "완료"}
          </button>
        </div>
      </li>
    );
  });
}
