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
import { observer } from "mobx-react-lite";
import { Task, todoStore } from "../../stores/TodoStore";

type Props = {
  task: Task;
};

const TaskItem: FC<Props> = observer(({ task }) => {
  return (
    <TodoItemContainer>
      <CheckboxInput
        type="checkbox"
        checked={task.completed}
        onChange={() => todoStore.toggleTaskCompletion(task.id)}
      />

      <LabelContainer>
        <CheckboxLabel
          style={{ textDecoration: task.completed ? "line-through" : "none" }}
        >
          {task.task}
        </CheckboxLabel>
        <DeleteIconContainer>
          <DeleteButton onClick={() => todoStore.deleteTask(task.id)}>
            <DeleteIcon src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png" />
          </DeleteButton>
        </DeleteIconContainer>
      </LabelContainer>
    </TodoItemContainer>
  );
});

export default TaskItem;
