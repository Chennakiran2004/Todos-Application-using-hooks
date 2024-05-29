import styled from "styled-components";

export const TabBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;
`;

export const TodoItem = styled.div`
  display: flex;
  // align-items: center;
  margin-top: 15px;
  padding: 0;
  text-decoration: underline;
`;

export const TodoItemButton = styled.button`
  border-style: none;
  background-color: transparent;
  cursor: pointer;
  margin-top: 12px;
  margin-right: 12px;
`;
