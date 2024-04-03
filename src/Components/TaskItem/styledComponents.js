import styled from "styled-components";

export const TodoItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding: 0;
`;

export const TodoItemsContainer = styled.li`
  margin-top: 15px;
`;

export const CheckboxInput = styled.input`
  width: 20px;
  height: 20px;
  margin-top: 12px;
  margin-right: 12px;
`;

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #e6f6ff;
  width: 100%;
  border-style: solid;
  border-width: 5px;
  border-color: #096f92;
  border-right: none;
  border-top: none;
  border-bottom: none;
  border-radius: 4px;
`;

export const CheckboxLabel = styled.label`
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 400;
  width: 82%;
  margin: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 5px;
  ${({ isChecked }) => isChecked && "text-decoration: line-through;"}
`;

export const DeleteIconContainer = styled.div`
  text-align: right;
  width: 18%;
`;

export const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const DeleteIcon = styled.img`
  padding: 15px;
  height: 30px;
`;
