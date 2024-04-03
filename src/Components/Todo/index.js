import React, { useState, useEffect } from "react";

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

const Todo = () => {
  const [task, setTask] = useState("");
  const [tasksList, setTasksList] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasksList"));
    if (storedTasks) {
      setTasksList(storedTasks);
    }
  }, []);

  const saveItemToLocalStorage = (tasksList) => {
    localStorage.setItem("tasksList", JSON.stringify(tasksList));
  };

  const handleOnClickSave = () => {
    saveItemToLocalStorage(tasksList);
  };

  const onChangeTask = (event) => {
    setTask(event.target.value);
  };

  const onClickAddTask = () => {
    if (task === "") {
      setIsButtonDisabled(true);
      return;
    }
    const newTask = {
      id: uuidv4(),
      task,
      completed: false,
    };
    setTasksList([...tasksList, newTask]);
    setTask("");
    setIsButtonDisabled(!isButtonDisabled);
  };

  const deleteTask = (taskId) => {
    const filteredTasks = tasksList.filter((eachTask) => {
      return eachTask.id !== taskId;
    });
    setTasksList(filteredTasks);
  };

  const toggleTaskCompletion = (taskId) => {
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
        <Button type="submit" onClick={onClickAddTask}>
          Add
        </Button>
        <TabBar activeTab={activeTab} changeActiveTab={setActiveTab} />
        {renderTodoList()}
        <Button onClick={handleOnClickSave} disabled={isButtonDisabled}>
          Save
        </Button>
      </CreateTaskContainer>
    </AppContainer>
  );
};

export default Todo;
