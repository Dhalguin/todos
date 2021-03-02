const mongoose = require("mongoose");

const connectDB = () => {
  const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@principalcluster.l8t1b.mongodb.net/test?retryWrites=true&w=majority`;

  mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });

  const connect = mongoose.connection;

  connect.once("open", () => console.log("Connected to db successfully"));

  connect.on("error", (err) => console.log("Could not connect to db", err));
};

module.exports = connectDB;
