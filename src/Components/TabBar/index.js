import React from "react";
import { TabBarContainer, TodoItem, TodoItemButton } from "./styledComponents";

const TabBar = ({ activeTab, changeActiveTab }) => {
  const handleTabClick = (tab) => {
    changeActiveTab(tab);
    console.log(tab);
  };

  return (
    <TabBarContainer>
      <TodoItem>
        <TodoItemButton type="button" onClick={() => handleTabClick("all")}>
          All Todos
        </TodoItemButton>
      </TodoItem>
      <TodoItem>
        <TodoItemButton type="button" onClick={() => handleTabClick("active")}>
          Active Todos
        </TodoItemButton>
      </TodoItem>
      <TodoItem>
        <TodoItemButton
          type="button"
          onClick={() => handleTabClick("completed")}
        >
          Completed Todos
        </TodoItemButton>
      </TodoItem>
    </TabBarContainer>
  );
};

export default TabBar;
