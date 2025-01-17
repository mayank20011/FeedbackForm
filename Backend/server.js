import express from "express";
import "./config/db.js";
import feedbackRouter from "./Rotes/feedback.js";
import cors from "cors";

// declaring Port
const PORT = 5000;

// initializing server
const server = express();

// allowing origins
server.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://feedback-form-frontend-omega.vercel.app/",
    ],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// middleware to parse json
server.use(express.json());

// setting routes
server.use("/feedback", feedbackRouter);

server.get("/", (req, res) => {
  res.send(`Server Running at port: ${PORT}`);
});

server.listen(PORT, () => {
  console.log(`Server Running at port: ${PORT}`);
});
