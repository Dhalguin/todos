process.env.DOTE_ENV != "production" && require("dotenv").config();
const app = require("./config/server");
const connectDB = require("./config/dbConnection");
require("./app/routes/todo")(app);

connectDB();

app.listen(app.get("port"), () =>
  console.log("Server started in port", app.get("port"))
);
