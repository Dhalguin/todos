import React from "react";
import ReactDOM from "react-dom";
import Tasks from "./pages/Tasks";
import "bootstrap/dist/css/bootstrap.min.css";

function TasksApp() {
  return (
    <div>
      <Tasks />
    </div>
  );
}

ReactDOM.render(<TasksApp />, document.getElementById("root"));
