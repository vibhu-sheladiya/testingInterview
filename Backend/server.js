const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http");
const { connectDB } = require("./db/dbConnection");
const routes = require("./route/route");
const config = require("./config/config");

const app = express();

/** parse x-www-form-urlencoded */
app.use(bodyParser.urlencoded({ extended: false }));

/** parse json */
app.use(bodyParser.json());

/** enable cors */
app.use(cors());

/** static files */
app.use(express.static("./public"));

/** routes */
app.use("/v1", routes);

/** 404 handler */
app.use((req, res) => {
  res.status(404).json({ message: "Route not found!" });
});

/** DB connection */
connectDB();

/** create server */
const server = http.createServer(app);

server.listen(config.port, () => {
  console.log(`🚀 Server running on port ${config.port}`);
});
