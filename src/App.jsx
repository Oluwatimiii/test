import React from "react";
import TaskLists from "./components/TaskLists";
import TaskContextProvider from "./context/TaskContext";

function App() {
  return (
    <TaskContextProvider>
      <div className="bg-purple-500 flex items-center justify-center h-screen w-screen overflow-hidden">
        <TaskLists />
      </div>
    </TaskContextProvider>
  );
}

export default App;
