import React from "react";
import Task from "./Task";

function TaskList({ tasks, handleDelete }) {
  const taskWidgets = [];
  for (let i = 0; i < tasks.length; i++) {
    taskWidgets.push(
      <Task
        key={`task${i}`}
        text={tasks[i].text}
        category={tasks[i].category}
        handleDelete={() => handleDelete(i)}
      />
    );
  }

  return <div className="tasks">{taskWidgets}</div>;
}

export default TaskList;
