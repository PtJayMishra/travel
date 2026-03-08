import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import errorMiddleware from "./middleware.js/errorMiddleware.js";
import authRoutes from "./route/authRoutes.js";
import userRoutes from "./route/userRoutes.js";

dotenv.config();

const app = express();

// connect database
await connectDB();

// middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));

// health route
app.get("/health", (req, res) => {
  res.json({ status: "Server running" });
});
app.use("/api/auth" , authRoutes)
app.use("/api/users", userRoutes);
app.use(errorMiddleware);
// start server
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on port ${process.env.PORT}`);
});