import { useState, useEffect, FC, ChangeEvent } from "react";

import { v4 as uuidv4 } from "uuid";

import TaskItem from "../TaskItem";

import TabBar from "../TabBar";

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

type Task = {
  id: string;
  task: string;
  completed: boolean;
};

const Todo: FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasksList, setTasksList] = useState<Task[]>([]);
  const [activeTab, setActiveTab] = useState<string>("All");
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  useEffect(() => {
    const storedTasks = JSON.parse(
      localStorage.getItem("tasksList") || "null"
    ) as Task[];
    if (storedTasks) {
      setTasksList(storedTasks);
    }
  }, []);

  const saveItemToLocalStorage = (tasksList: Task[]) => {
    localStorage.setItem("tasksList", JSON.stringify(tasksList));
  };

  const handleOnClickSave = () => {
    saveItemToLocalStorage(tasksList);
  };

  const onChangeTask = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
    setIsButtonDisabled(event.target.value === "");
  };

  const onClickAddTask = () => {
    const newTask = {
      id: uuidv4(),
      task,
      completed: false,
    };
    setTasksList([...tasksList, newTask]);
    setTask("");
    setIsButtonDisabled(true);
  };

  const deleteTask = (taskId: string) => {
    const filteredTasks = tasksList.filter((eachTask) => {
      return eachTask.id !== taskId;
    });
    setTasksList(filteredTasks);
  };

  const toggleTaskCompletion = (taskId: string) => {
    const updatedTasksList = tasksList.map((eachTask) => {
      if (eachTask.id === taskId) {
        return {
          ...eachTask,
          completed: !eachTask.completed,
        };
      }
      return eachTask;
    });
    setTasksList(updatedTasksList);
  };

  const renderTodoList = () => {
    let filteredTasks = tasksList;

    if (activeTab === "active") {
      filteredTasks = tasksList.filter((eachTask) => !eachTask.completed);
    } else if (activeTab === "completed") {
      filteredTasks = tasksList.filter((eachTask) => eachTask.completed);
    }
    return (
      <TasksList>
        {filteredTasks.map((eachTask) => (
          <TaskItem
            taskDetails={eachTask}
            key={eachTask.id}
            deleteTask={deleteTask}
            toggleTaskCompletion={toggleTaskCompletion}
          />
        ))}
      </TasksList>
    );
  };

  return (
    <AppContainer>
      <MainHeading>Todo</MainHeading>
      <CreateTaskContainer>
        <CreateTaskHeading>
          Create <Span>Task</Span>
        </CreateTaskHeading>
        <TodoUserInput
          type="text"
          placeholder="What needs to be done?"
          value={task}
          onChange={onChangeTask}
        />
        <Button type="submit" onClick={onClickAddTask} disabled={isButtonDisabled}>
          Add
        </Button>
        <TabBar activeTab={activeTab} changeActiveTab={setActiveTab} />
        {renderTodoList()}
        <Button onClick={handleOnClickSave}>
          Save
        </Button>
      </CreateTaskContainer>
    </AppContainer>
  );
};

export default Todo;