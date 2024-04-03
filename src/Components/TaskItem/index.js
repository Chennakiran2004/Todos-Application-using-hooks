// import { useState } from "react";

import {
  TodoItemContainer,
  CheckboxInput,
  LabelContainer,
  CheckboxLabel,
  DeleteIconContainer,
  DeleteIcon,
  DeleteButton,
} from "./styledComponents";

const TaskItem = (props) => {
  const { taskDetails, deleteTask, toggleTaskCompletion } = props;
  const { id, task, completed } = taskDetails;

  const handleCheckboxChange = () => {
    toggleTaskCompletion(id);
  };

  const onClickDeleteTask = () => {
    deleteTask(id);
  };

  return (
    <TodoItemContainer>
      <CheckboxInput
        type="checkbox"
        checked={completed}
        onChange={handleCheckboxChange}
      />
      <LabelContainer>
        <CheckboxLabel isChecked={completed}>{task}</CheckboxLabel>
        <DeleteIconContainer>
          <DeleteButton onClick={onClickDeleteTask}>
            <DeleteIcon src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png" />
          </DeleteButton>
        </DeleteIconContainer>
      </LabelContainer>
    </TodoItemContainer>
  );
};

export default TaskItem;
