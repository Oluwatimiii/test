import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { TaskContext } from "../context/TaskContext";

const Input = () => {
  const { addTask, clearTasks, editItem, editTask } = useContext(TaskContext);

  const [title, setTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (editItem === null) {
      addTask(title);
      setTitle("");
    } else {
        editTask(title, editItem.id)
    }
  };

  const inputHandler = (e) => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    if (editItem !== null) {
      setTitle(editItem.title);
      console.log(editItem);
    } else {
      setTitle("");
    }
  }, [editItem]);

  return (
    <form className="mb-6" onSubmit={submitHandler}>
      <input
        type="text"
        onChange={inputHandler}
        value={title}
        className="w-full bg-gray-600 text-white rounded-md outline-none placeholder:text-white
         placeholder:opacity-[0.5] py-1 px-2"
        placeholder="Add a task.."
        required
      />
      <div className="mt-4 flex items-center justify-center space-x-5 ">
        <button
          className="text-white font-semibold px-4 py-[2px] bg-pink-400 rounded-md hover:shadow-sm
           transition-all duration-300 ease hover:shadow-white"
          type="submit"
        >
          {editItem ? "Edit Task" : "Add Task"}
        </button>
        <button
          className="text-white font-semibold px-4 py-[2px] bg-pink-400 rounded-md hover:shadow-sm
           transition-all duration-300 ease hover:shadow-white"
          onClick={clearTasks}
          type="button"
        >
          Clear
        </button>
      </div>
    </form>
  );
};

export default Input;
