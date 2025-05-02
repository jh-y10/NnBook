import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import authRoutes from "./routes/authRoutes.js";
import myPageRoutes from "./routes/myPageRoutes.js";
import libraryRoutes from "./routes/libraryRoutes.js";
import meetingRoutes from "./routes/meetingRoutes.js";
import borrowRoutes from "./routes/borrowRoutes.js";
import { specs, swaggerUi } from "./swagger.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use("/api/auth", authRoutes);
app.use("/my", myPageRoutes);
app.use("/library", libraryRoutes);
app.use("/meeting", meetingRoutes);
app.use("/borrow", borrowRoutes);

export default app;
