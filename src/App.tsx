import Todo from "./Components/Todo";
import "./styles.css";

// import TabBar from "./Components/TabBar";

import { FC } from "react";

const App: FC = () => {
  return (
    <div className="App">
      <Todo />
    </div>
  );
};

export default App;
