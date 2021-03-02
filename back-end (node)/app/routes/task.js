const Todo = require("../models/todo");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.json({ response: "success" });
  });

  app.get("/todos", (req, res) => {
    Todo.find()
      .then((data) => {
        res.status(200).json({ response: "success", data: data });
      })
      .catch((err) => {
        console.log("Error", err.message);
        res.status(400).json({ response: "failed" });
      });
  });

  app.post("/todo/add", (req, res) => {
    let todo = new Todo({
      _id: req.body._id,
      text: req.body.text,
      completed: req.body.completed,
    });

    todo
      .save()
      .then((doc) => {
        console.log("Doc added", doc);
        res.status(201).json({ response: "success" });
      })
      .catch((err) => {
        console.log("Error", err.message);
        res.status(400).json({ response: "failed" });
      });
  });

  app.get("/todo/remove/:id", (req, res) => {
    const id = req.params.id;

    Todo.findByIdAndDelete({ _id: id })
      .then((doc) => {
        console.log("Doc romoved", doc);
        res.status(200).json({ response: "success" });
      })
      .catch((err) => {
        console.log("Error", err.message);
        res.status(400).json({ response: "failed" });
      });
  });

  app.get("/todo/completed/:id/:status", (req, res) => {
    const id = req.params.id;
    const status = req.params.status == "true";

    Todo.findByIdAndUpdate({ _id: id }, { $set: { completed: status } })
      .then((doc) => {
        console.log("Doc updated", doc);
        res.status(200).json({ response: "success" });
      })
      .catch((err) => {
        console.log("Error", err.message);
        res.status(400).json({ response: "failed" });
      });
  });
};
