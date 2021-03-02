import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icon from "@fortawesome/free-solid-svg-icons";

function ListRow(props) {
  const task = props.task;
  const removeTask = props.removeTask;
  const completedTask = props.completedTask;

  const name = task.completed ? (
    <h5 className="mb-0 ml-2 text-completed" style={{ color: "#A9A8A8" }}>
      {task.text}
    </h5>
  ) : (
    <h5 className="mb-0 ml-2">{task.text}</h5>
  );

  return (
    <div className="list-row p-2">
      <div className="row">
        <div className="col-lg-8 col-12 d-flex align-items-center">{name}</div>
        <div className="col-lg-4 col-12 text-right">
          <i
            className="btn mx-1 text-light"
            style={{ backgroundColor: "#C23333" }}
            onClick={() => removeTask(task._id)}
          >
            <FontAwesomeIcon icon={Icon.faTimes} />
          </i>
          <i
            className="btn mx-1 text-light"
            style={{ backgroundColor: "#11D9DF" }}
            onClick={() => completedTask(task._id, task.completed)}
          >
            <FontAwesomeIcon icon={Icon.faCheck} />
          </i>
        </div>
      </div>
    </div>
  );
}

export default ListRow;
