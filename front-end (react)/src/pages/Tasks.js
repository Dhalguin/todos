import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/tasks.css";
import TaskList from "../components/TaskList";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    getTasks();
  }, []);

  const onChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    let doc = {
      _id: uuidv4(),
      text: text,
      completed: false,
    };
    addTask(doc);
  };

  const getTasks = () => {
    fetch(`http://localhost:3001/todos`)
      .then((res) => res.json())
      .then((data) => {
        if (data.response === "success") {
          setTasks(data.data);
        }
      });
  };

  const addTask = (doc) => {
    fetch("http://localhost:3001/todo/add", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(doc),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.response === "success") {
          setTasks(tasks.concat(doc));
          setText("");
        }
      });
  };

  return (
    <div>
      <div className="card col-lg-8 col-md-8 col-sm-8 col-10 my-5 mx-auto">
        <h2 className="text-center mb-3" style={{ color: "#6A6969" }}>
          Tasks List
        </h2>
        <div>
          <form id="form" onSubmit={handleSubmit}>
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-8 col-sm-10 col-8 pr-0">
                <input
                  type="text"
                  name="text"
                  id="text"
                  onChange={onChange}
                  value={text}
                  className="form-control"
                  placeholder="Write your new task"
                />
              </div>
              <div className="col-lg-1 col-md-2 col-sm-2 col-3">
                <button
                  type="submit"
                  className="btn text-light"
                  style={{ backgroundColor: "#75138A" }}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="text-center">
          <TaskList tasks={tasks} getTasks={getTasks} setTasks={setTasks} />
        </div>
      </div>
    </div>
  );
}

export default Tasks;
