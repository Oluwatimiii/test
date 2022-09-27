import React from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const Task = ({ task }) => {
  const { removeTask, findItem } = useContext(TaskContext);

  return (
    <div>
      <li className="flex justify-between items-center text-white">
        <p className="text-1xl">{task.title}</p>
        <div className="flex space-x-2">
          <button onClick={() => removeTask(task.id)}>
            <RiDeleteBin2Line />
          </button>
          <button onClick={() => findItem(task.id)}>
            <MdOutlineEdit />
          </button>
        </div>
      </li>
    </div>
  );
};

export default Task;
