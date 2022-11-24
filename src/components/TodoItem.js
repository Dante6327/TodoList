import React from "react";
import styled from "styled-components";

const Item = styled.div`
  height: 40px;
  background-color: #e6e6fa;
  z-index: 2;
  border: 2px solid black;
  border-radius: 10px;
  margin: 10px;
  padding-top: 10px;
  font-size: 20px;
`;
const temp = styled;
function TodoItem({ item }) {
  return item.map((i) => <Item key={i.key}>{i.text}</Item>);
}

export default TodoItem;
