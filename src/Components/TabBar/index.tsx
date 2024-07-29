import React, { FC } from "react";
import { TabBarContainer, TodoItem, TodoItemButton } from "./styledComponents";

type tabBarProps = {
  activeTab: string;
  changeActiveTab: (tab: string) => void;
};

const TabBar: FC<tabBarProps> = ({ activeTab, changeActiveTab }) => {
  const handleTabClick = (tab: string) => {
    changeActiveTab(tab);
  };

  return (
    <TabBarContainer role="tabsList">
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
