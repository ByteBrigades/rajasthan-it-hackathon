const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./Config/dbConfig");
const morgan = require("morgan");
const customerRoute = require("./Routes/customerRoute");
const ownerRoute = require("./Routes/ownerRoute");
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);
app.use("/customers", customerRoute);
app.use("/owners", ownerRoute);
app.use(morgan("dev"));
connectDB();
app.listen(8080, () => {
  console.log("running on the port 8080");
});
