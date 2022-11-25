import React, { useState } from "react";
import styled from "styled-components";

const TodoItemDiv = styled.div`
  height: 40px;
  background-color: #e6e6fa;
  z-index: 2;
  border: 2px solid black;
  border-radius: 10px;
  margin: 10px;
  font-size: 20px;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

/**
 * TodoItem 체크박스
 */
const ItemCheckBox = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #8b0000;
  border-radius: 0.35%;
  margin: 0 10px;
  background-color: #eee8aa;
  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #8b0000;
  }
`;

/**
 * TodoItem 삭제 버튼
 */
const ItemDeleteBtn = styled.button`
  width: 40px;
  height: 30px;
  background-color: #eee8aa;

  margin: 10px;
  border: 3px solid #8b0000;
  border-radius: 10px;
  &:hover {
    background-color: #bc8f8f;
  }
  &:active {
    background-color: #8b0000;
  }
`;

const deleteTodo = (key, item, setItem) => {
  setItem(item.filter((i) => i.key !== key));
};

function TodoItem({ item, setItem }) {
  return item.map((i) => (
    <TodoItemDiv id={i.key} key={i.key}>
      <ItemCheckBox type="checkbox" />
      {i.text}
      <ItemDeleteBtn onClick={() => deleteTodo(i.key, item, setItem)}>
        삭제
      </ItemDeleteBtn>
    </TodoItemDiv>
  ));
}

export default TodoItem;
