export default function MakeItem({ list, deleteTodo, changeDone }) {
  return list.map(({ id, title, body, isDone }) => {
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
        key={"list" + id}
      >
        <h3 style={{ marginTop: "5px" }}>{title}</h3>
        <p>{body}</p>
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
              changeDone({ id, title, body, isDone });
            }}
          >
            {isDone ? "취소" : "완료"}
          </button>
        </div>
      </li>
    );
  });
}
