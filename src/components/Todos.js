import React, { useState } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const Background = styled.div`
  background-color: #fafad2;
  height: 100vh;
  position: relative;
`;

const TodoBody = styled.div`
  background-color: #ebfbff;
  position: absolute;
  width: 800px;
  height: 1000px;
  border: 2px solid black;
  border-radius: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
`;

const TodoTitle = styled.div`
  margin: 0 auto;
  text-align: center;
  font-size: 40px;
  font-weight: 600;
`;

const AddTodoInput = styled.input`
  width: 600px;
  height: 30px;
  border: 2px solid black;
  border-radius: 8px;
  text-align: center;
`;

const AddTodoBtn = styled.button`
  width: 40px;
  height: 34px;
  border: 2px solid black;
  border-radius: 8px;
  :active {
    background-color: #aaaaaa;
  }
`;

const TodoItemBox = styled.div`
  height: 800px;
  margin: 20px 75px;
  background-color: #eee8aa;
  border: 2px solid black;
  border-radius: 10px;
`;

let cnt = 1;
function Todos() {
  const [textVal, setTextVal] = useState("");
  const [item, setItem] = useState([]);

  /**
   * input 변경시 value 설정
   */
  const handleChange = (e) => {
    setTextVal(e.target.value);
  };

  /**
   * addTodoItem
   */
  const addBtn = () => {
    setItem([
      ...item,
      {
        key: cnt,
        text: document.querySelector(`input[name='text']`).value,
        checked: false,
      },
    ]);
    cnt++;

    //Item 추가 후 text를 ""로 변경
    setTextVal("");
  };
  return (
    <Background>
      <TodoBody>
        <TodoTitle>
          To Do List
          <br />
          <AddTodoInput
            name="text"
            value={textVal}
            onChange={handleChange}
            placeholder="enter todo"
          />
          <AddTodoBtn onClick={addBtn}>+</AddTodoBtn>
          <TodoItemBox>{<TodoItem item={item} />}</TodoItemBox>
        </TodoTitle>
      </TodoBody>
    </Background>
  );
}

export default Todos;
