import React, { FC } from "react";
import { TabBarContainer, TodoItem, TodoItemButton } from "./styledComponents";
import { observer } from "mobx-react-lite";
import { todoStore } from "../../stores/TodoStore";

const TabBar: FC = observer(() => {
  return (
    <TabBarContainer role="tabsList">
      {["all", "active", "completed"].map((tab) => (
        <TodoItem key={tab}>
          <TodoItemButton
            onClick={() => {
              todoStore.setActiveTab(tab);
              console.log("active tab", todoStore.activeTab);
            }}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)} Todos
          </TodoItemButton>
        </TodoItem>
      ))}
    </TabBarContainer>
  );
});

export default TabBar;
