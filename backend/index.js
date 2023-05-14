import express from "express";
import cors from "cors";

import routes from "./app/routes/routes.js";
import { database } from "./app/models/index.js";

const app = express();

app.use(express.json());
app.use(cors());

//Sync Database
database();

app.use("/api", routes);
app.use("/app/Images", express.static("./app/Images"));

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  return res.status(err.statusCode).json({
    status: "Failed",
    statusCode: err.statusCode,
    message: err.message,
    stack: err.stack,
  });
});

const port = process.env.port || 7007;

app.listen(port, () => {
  console.log(`Server is running on ${port}...`);
});
