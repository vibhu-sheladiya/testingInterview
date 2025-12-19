import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import ErrorMiddelware from "./middleware/error.js";
import path, { join } from "path";
import initRoute from "./route/route.js";


const app = express();
const __dirname = path.resolve();

// Config
config({
  path: "./Config/config.env",
});

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text({ type: "application/xml" }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL, "http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);


// Initialize Routes
initRoute(app);


export default app;

// Using Custom Error Middelware
app.use(ErrorMiddelware);
