const mongoose = require("mongoose");

const Todo = mongoose.model("Todo", {_id: String, text: String, completed: Boolean });

module.exports = Todo;
