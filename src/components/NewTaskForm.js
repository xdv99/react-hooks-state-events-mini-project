import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskData, setTaskData] = useState({
    text: "",
    category: "Code",
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setTaskData({ ...taskData, [name]: value });
  }

  return (
    <form
      className="new-task-form"
      onSubmit={(event) => {
        event.preventDefault();
        onTaskFormSubmit(taskData);
      }}
    >
      <label>
        Details
        <input
          type="text"
          name="text"
          value={taskData.text}
          onChange={handleChange}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={taskData.category}
          onChange={handleChange}
        >
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
