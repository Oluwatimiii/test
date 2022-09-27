import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import Header from "./Header";
import Input from "./Input";
import Task from "./Task";

const TaskLists = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <section className="bg-gray-900 w-[80%] md:w-[50%] h-[75%] p-6 rounded-md">
      <Header />
      <Input />
      <div className="h-full">
        {!tasks.length && <p className="text-center pt-[4rem] text-gray-400 opacity-60 font-semibold text-2xl ">Empty Task List....</p> }
        <ul className="flex flex-col space-y-3 justify-center">
          {tasks.map((task) => (
            <Task task={task} key={task.id} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TaskLists;
