import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes instead of Switch
import Todo from "./Components/Todo";
// import NotFound from "./NotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        {" "}
        {/* Use Routes instead of Switch */}
        <Route exact path="/" element={<Todo />} />{" "}
        {/* Use element prop instead of component */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
