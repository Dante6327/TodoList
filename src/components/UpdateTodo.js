import React, { useState } from "react";
import styled from "styled-components";

const UpdateTodoDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  position: relative;
`;

const UpdateMainDiv = styled.div`
  width: 400px;
  height: 300px;
  background-color: #dcdcdc;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  border: 3px solid black;
`;

const UpdateInput = styled.input`
  border: 2px solid black;
  border-radius: 7px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90%;
  height: 30px;
  transform: translate(-50%, -50%);
`;

const ItemUpdateBtn = styled.button`
  width: 40px;
  height: 30px;
  background-color: #eee8aa;

  border: 3px solid #8b0000;
  border-radius: 10px;
  &:hover {
    background-color: #bc8f8f;
  }
  &:active {
    background-color: #8b0000;
  }
  position: absolute;
  bottom: 4%;
  left: 80%;
  transform: translate(-50%);
`;

const ItemCancelBtn = styled(ItemUpdateBtn)`
  left: 92%;
`;

/**
 * @param item : 할 일 목록
 * @param setItem : 할 일 목록 수정 함수
 * @param setIsUpdate : 수정 팝업 노출 여부
 * @param todoId : 수정하려는 할 일의 Key 값
 * @return 수정 팝업 노출
 */
export default function UpdateTodo(data) {
  const [editTextVal, setEditTextVal] = useState("");
  const { item, setItem, setIsUpdate, todoId } = data;
  console.log("todoId", todoId);
  const handleChange = (e) => {
    setEditTextVal(e.target.value);
  };

  const handleUpdate = () => {
    setItem(
      item.filter((i) =>
        i.key == todoId ? (i.text = editTextVal) : (i.text = i.text)
      )
    );
    setIsUpdate((prev) => !prev);
  };
  return (
    <UpdateTodoDiv>
      <UpdateMainDiv>
        <UpdateInput
          placeholder="edit text"
          value={editTextVal}
          onChange={handleChange}
        />
        <ItemUpdateBtn onClick={handleUpdate}>수정</ItemUpdateBtn>
        <ItemCancelBtn onClick={() => setIsUpdate((prev) => !prev)}>
          취소
        </ItemCancelBtn>
      </UpdateMainDiv>
    </UpdateTodoDiv>
  );
}
