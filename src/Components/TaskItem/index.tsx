// import { FC } from "react";

// import {
//   TodoItemContainer,
//   CheckboxInput,
//   LabelContainer,
//   CheckboxLabel,
//   DeleteIconContainer,
//   DeleteIcon,
//   DeleteButton,
// } from "./styledComponents";

// type taskItemProps = {
//   taskDetails: {
//     id: string;
//     task: string;
//     completed: boolean;
//   };
//   deleteTask: (id: string) => void;
//   toggleTaskCompletion: (id: string) => void;
// };

// const TaskItem: FC<taskItemProps> = ({
//   taskDetails,
//   deleteTask,
//   toggleTaskCompletion,
// }) => {
//   const { id, task, completed } = taskDetails;

//   const handleCheckboxChange = () => {
//     toggleTaskCompletion(id);
//   };

//   const onClickDeleteTask = () => {
//     deleteTask(id);
//   };

//   return (
//     <TodoItemContainer>
//       <CheckboxInput
//         type="checkbox"
//         checked={completed}
//         onChange={handleCheckboxChange}
//         aria-label="checkbox"
//       />
//       <LabelContainer>
//         <CheckboxLabel style={{ textDecoration: completed ? 'line-through' : 'none' }}>{task}</CheckboxLabel>
//         <DeleteIconContainer>
//           <DeleteButton onClick={onClickDeleteTask} aria-label="Delete task">
//             <DeleteIcon src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png" />
//           </DeleteButton>
//         </DeleteIconContainer>
//       </LabelContainer>
//     </TodoItemContainer>
//   );
// };

// export default TaskItem;


// TaskItem.tsx
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
        aria-label="checkbox"
      />
      <LabelContainer>
        <CheckboxLabel style={{ textDecoration: completed ? 'line-through' : 'none' }}>
          {task}
        </CheckboxLabel>
        <DeleteIconContainer>
          <DeleteButton onClick={onClickDeleteTask} aria-label="Delete task">
            <DeleteIcon src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png" />
          </DeleteButton>
        </DeleteIconContainer>
      </LabelContainer>
    </TodoItemContainer>
  );
};

export default TaskItem;
