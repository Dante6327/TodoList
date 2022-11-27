import React, { useState } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import UpdateTodo from "./UpdateTodo";

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
  @media screen and (max-width: 800px) {
    width: 600px;
    height: 800px;
  }
`;

const TodoTitle = styled.div`
  margin: 0 auto;
  text-align: center;
  font-size: 40px;
  font-weight: 600;
`;

const AddTodoInput = styled.input`
  width: 80%;
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
  @media screen and (max-width: 800px) {
    height: 600px;
  }
`;

const TodoDeleteAll = styled.button`
  width: 90px;
  height: 30px;
  background-color: #eee8aa;

  border: 3px solid black;
  border-radius: 10px;
  &:hover {
    background-color: #bc8f8f;
  }
  &:active {
    background-color: #8b0000;
  }
  position: absolute;
  right: 75px;
  bottom: 45px;
`;

let cnt = 1;
function Todos() {
  const [textVal, setTextVal] = useState("");
  const [item, setItem] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [todoId, setTodoId] = useState("");

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
        id: cnt,
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
          <TodoItemBox>
            {
              <TodoItem
                item={item}
                setItem={setItem}
                setIsUpdate={setIsUpdate}
                setTodoId={setTodoId}
              />
            }
          </TodoItemBox>
        </TodoTitle>
        <TodoDeleteAll onClick={() => setItem([])}>모두 삭제</TodoDeleteAll>
      </TodoBody>
      {isUpdate && (
        <UpdateTodo
          item={item}
          setItem={setItem}
          setIsUpdate={setIsUpdate}
          todoId={todoId}
        />
      )}
    </Background>
  );
}

export default Todos;
