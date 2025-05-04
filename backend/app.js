import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import authRoutes from "./routes/authRoutes.js";
import borrowRoutes from "./routes/borrowRoutes.js";
import libraryRoutes from "./routes/libraryRoutes.js";
import meetingRoutes from "./routes/meetingRoutes.js";
import myPageRoutes from "./routes/myPageRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/mypage", myPageRoutes);
app.use("/api/library", libraryRoutes);
app.use("/api/meeting", meetingRoutes);
app.use("/api/borrow", borrowRoutes);

export default app;
