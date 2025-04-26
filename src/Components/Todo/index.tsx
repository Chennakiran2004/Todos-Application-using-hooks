import { useState, useEffect, FC, ChangeEvent } from "react";

import { v4 as uuidv4 } from "uuid";

import TaskItem from "../TaskItem";

import TabBar from "../TabBar";
import { todoStore } from "../../stores/TodoStore";
import { observer } from "mobx-react-lite";

import {
  AppContainer,
  MainHeading,
  CreateTaskContainer,
  CreateTaskHeading,
  Span,
  TodoUserInput,
  Button,
  TasksList,
} from "./styledComponents";

const Todo: FC = observer(() => {
  const handleAddTask = () => {
    todoStore.addTask({
      id: uuidv4(),
      task: todoStore.taskInput,
      completed: false,
    });
  };

  return (
    <AppContainer>
      <MainHeading>Todo</MainHeading>
      <CreateTaskContainer>
        <CreateTaskHeading>
          Create <Span>Task</Span>
        </CreateTaskHeading>
        <TodoUserInput
          type="input"
          placeholder="What needs to be done?"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            todoStore.setTaskInput(event.target.value)
          }
          value={todoStore.taskInput}
        />
        <Button type="button" onClick={handleAddTask}>
          Add
        </Button>
        <TabBar />
        <TasksList>
          {todoStore.filteredTasks.map((eachTask) => (
            <TaskItem key={eachTask.id} task={eachTask} />
          ))}
        </TasksList>
        <Button onClick={() => todoStore.saveToLocalStorage()}>Save</Button>
      </CreateTaskContainer>
    </AppContainer>
  );
});

export default Todo;
