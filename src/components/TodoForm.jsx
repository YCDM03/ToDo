import { useState } from "react";
import MakeItem from "./MakeItem";

export default function TodoForm() {
  const initial = { id: -1, title: "test", body: "test", isDone: false };
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [id, setId] = useState(0);
  const [list, setList] = useState([initial]);
  const subtitles = ["Working", "Done"];

  //style
  const ulStyle = {
    width: "100%",
    listStyle: "none",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "start",
  };
  const inputStyle = { width: "17%", color: "black" };
  //

  const addTodo = (event) => {
    event.preventDefault();
    if (!event.target[0].value) {
      alert("제목을 입력해주세요");
      return;
    } else if (!event.target[1].value) {
      alert("내용을 입력해주세요");
      return;
    }
    event.target[0].value = "";
    event.target[1].value = "";
    setList([...list, { id, title, body, isDone: false }]);
    setId(id + 1);
  };

  const deleteTodo = (id) => {
    setList(
      list.filter((e) => {
        return e.id !== id;
      })
    );
  };

  const changeDone = (id, title, body, isDone) => {
    const items = list.filter((e) => {
      return e.id !== id;
    });
    setList([...items, { id, title, body, isDone: !isDone }]);
  };

  return (
    <>
      <h1>My Todo List</h1>
      <form
        style={{
          display: "flex",
          width: "100%",
          borderTop: "2px solid white",
          borderBottom: "2px solid white",
          padding: "20px 0",
        }}
        action=""
        onSubmit={addTodo}
      >
        <label htmlFor="" style={{ marginLeft: "5%" }} />
        제목
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          style={inputStyle}
          type="text"
        />
        <label htmlFor="" style={{ marginLeft: "5%" }} />
        내용
        <input
          style={inputStyle}
          type="text"
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
        <button
          style={{
            marginLeft: "auto",
            marginRight: "5%",
          }}
        >
          추가하기
        </button>
      </form>

      {subtitles.map((subtitle) => {
        return (
          <ul key={subtitle + "ul"} style={ulStyle}>
            <div
              key={subtitle + "div"}
              style={{ width: "100%", textAlign: "center" }}
            >
              <h3>{subtitle}</h3>
            </div>
            <MakeItem
              list={list.filter(({ isDone }) => {
                return subtitle === "Working" ? !isDone : isDone;
              })}
              deleteTodo={deleteTodo}
              changeDone={changeDone}
            />
          </ul>
        );
      })}
    </>
  );
}
