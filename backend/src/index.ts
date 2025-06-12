import express from "express";
import cors from "cors";
import postsRoutes from "./routes/postsRoutes";
import authRoutes from "./routes/authRoutes";
import { connectDB } from "./config/db";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/", authRoutes);
app.use("/api/posts", postsRoutes);

const PORT = process.env.PORT;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
});
