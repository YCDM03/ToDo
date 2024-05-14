import { useState } from "react";
import "./App.css";

function App() {
  const initialState = { id: -1, title: "test", body: "test", isDone: true };
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [id, setId] = useState(0);
  const [list, setList] = useState([initialState]);

  const addTodo = (e) => {
    e.preventDefault();
    if (!e.target[0].value) {
      alert("제목을 입력해주세요");
      return;
    } else if (!e.target[1].value) {
      alert("내용을 입력해주세요");
      return;
    }
    e.target[0].value = "";
    e.target[1].value = "";
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
    const item = list.filter((e) => {
      return e.id !== id;
    });
    setList([...item, { id, title, body, isDone: !isDone }]);
  };
  const workingList = list.filter(({ isDone }) => {
    return !isDone;
  });
  const doneList = list.filter(({ isDone }) => {
    return isDone;
  });

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
          style={{ width: "17%", color: "black" }}
          type="text"
        />
        <label htmlFor="" style={{ marginLeft: "5%" }} />
        내용
        <input
          style={{ width: "17%", color: "black" }}
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
      <h3> Working...</h3>
      <ul
        style={{
          width: "100%",
          listStyle: "none",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "start",
        }}
      >
        <MakeList
          list={workingList}
          deleteTodo={deleteTodo}
          changeDone={changeDone}
        >
          {" "}
        </MakeList>
      </ul>

      <h3> Done..!</h3>

      <ul
        style={{
          width: "100%",
          listStyle: "none",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "start",
        }}
      >
        <MakeList
          list={doneList}
          deleteTodo={deleteTodo}
          changeDone={changeDone}
        />
      </ul>
    </div>
  );
}

function MakeList({ list, deleteTodo, changeDone }) {
  return list.map(({ id, title, body, isDone }) => {
    return (
      <>
        <li
          style={{
            width: "20%",
            textAlign: "center",
            border: "2px solid white",
            margin: "10px",
          }}
          key={"list" + id}
        >
          <h3 style={{ marginTop: "5px" }}>{title}</h3>
          <p>{body}</p>
          <span>{isDone}</span>
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
              changeDone(id, title, body, isDone);
            }}
          >
            {isDone ? "취소" : "완료"}
          </button>
        </li>
      </>
    );
  });
}
export default App;
