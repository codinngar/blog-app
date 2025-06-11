import express from "express";
import cors from "cors";
import postsRoutes from "./routes/postsRoutes";
import { connectDB } from "./config/db";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/posts", postsRoutes);

const PORT = process.env.PORT;
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
});
