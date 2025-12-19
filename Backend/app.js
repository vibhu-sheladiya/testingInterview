import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import ErrorMiddelware from "./middleware/error.js";
import path, { join } from "path";
import initRoute from "./route/route.js";
// import initLogger from "./Config/logger.js";
// import requestIp from "request-ip"
// import compression from "compression"
// import { startCronJobs } from "./Services/allCronjobs.js";

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
    origin: [process.env.FRONTEND_URL, "http://localhost:3000", "http://localhost:8081", "https://booking.icorpsecurity.com.au", "https://icorp.awp.cc", "https://www.icorpsecurity.com.au", "https://icorpsecurity.com.au"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);
// app.use(requestIp.mw());
// app.use(compression())

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// Initialize Routes
initRoute(app);

// Initialize Logs
// initLogger();

// Run all cron jobs
// if (process.env.NODE_ENV === 'production') startCronJobs();

// Ip
// app.get('/ip', (req, res) => {
//   const clientIp = req.clientIp;
//   res.send(`${clientIp}`);
// });

// Serving frontend
// app.use(express.static(join(__dirname, "./out")));

// app.get("*", (req, res) => {
//   res.sendFile(join(__dirname, "./out/index.html"));
// });

export default app;

// Using Custom Error Middelware
app.use(ErrorMiddelware);
