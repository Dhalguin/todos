import React from "react";
import ListRow from "./ListRow";

function TaskList(props) {
  const tasks = props.tasks;
  const getTasks = props.getTasks;
  const setTasks = props.setTasks;

  const removeTask = (id) => {
    fetch(`http://localhost:3001/todo/remove/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.response === "success") {
          setTasks(tasks.filter((item) => item._id !== id));
        }
      });
  };

  const completedTask = (id, status) => {
    fetch(`http://localhost:3001/todo/completed/${id}/${!status}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.response === "success") {
          getTasks();
        }
      });
  };

  return (
    <div className="mb-3">
      {tasks.length > 0 ? (
        <div className="row justify-content-center">
          {tasks.map((item) => (
            <div key={item._id} className="col-lg-10 mt-3">
              <ListRow
                task={item}
                removeTask={removeTask}
                completedTask={completedTask}
              />
            </div>
          ))}
        </div>
      ) : (
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "150px" }}
        >
          <h5 style={{ color: "#A2A4A4" }}>There are no tasks</h5>
        </div>
      )}
    </div>
  );
}

export default TaskList;
