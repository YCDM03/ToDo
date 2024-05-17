import { useState } from "react";
import MakeList from "./MakeList";
import { v4 as uuidv4 } from "uuid";

export default function TodoForm() {
  const [list, setList] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const content = formData.get("content");

    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 입력해주세요.");
      e.target.reset();
      return;
    }
    setList([...list, { id: uuidv4(), title, content, isDone: false }]);
    e.target.reset();
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
        <label
          htmlFor="title-input"
          style={{ marginLeft: "5%", marginRight: "1%" }}
        >
          제목
        </label>
        <input
          id="title-input"
          style={{ width: "17%", color: "black" }}
          type="text"
          name="title"
        />
        <label
          htmlFor="content-input"
          style={{ marginLeft: "5%", marginRight: "1%" }}
        >
          내용
        </label>
        <input
          id="content-input"
          style={{ width: "17%", color: "black" }}
          type="text"
          name="content"
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
      <MakeList list={list} setList={setList} />
    </>
  );
}
