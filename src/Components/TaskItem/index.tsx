// import { useState } from "react";

import { FC } from "react";

import {
  TodoItemContainer,
  CheckboxInput,
  LabelContainer,
  CheckboxLabel,
  DeleteIconContainer,
  DeleteIcon,
  DeleteButton,
} from "./styledComponents";

type taskItemProps = {
  taskDetails: {
    id: string;
    task: string;
    completed: boolean;
  };
  deleteTask: (id: string) => void;
  toggleTaskCompletion: (id: string) => void;
};

const TaskItem: FC<taskItemProps> = ({
  taskDetails,
  deleteTask,
  toggleTaskCompletion,
}) => {
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
