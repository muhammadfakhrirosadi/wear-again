import express from "express";
import router from "./routes/index.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import session from "express-session";
import passport from "./config/passport.js";
// import router from "./routes/profileRoutes.js";
import { testConnection } from "./database/db.js";

dotenv.config();

const app = express();

// Configure CORS
const corsOptions = {
  origin: "http://localhost:5173", // frontend URL
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/api", router);

app.get("/", (req, res) => {
  res.send("hello world");
});

const PORT = process.env.APP_PORT || 3000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
  testConnection();
});
