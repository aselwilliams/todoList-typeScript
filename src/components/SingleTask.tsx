import React from "react";
import { ITask } from "../Interfaces";

interface Props {
  task: ITask;
  completeTask(taskToDelete: string): void;
}

const SingleTask = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span className="deadline">{task.deadline}</span>
      </div>
      <button onClick={() => completeTask(task.id)}>X</button>
    </div>
  );
};
export default SingleTask;
