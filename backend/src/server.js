import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import libraryRoutes from "./routes/library.routes.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    optionsSuccessStatus: 200
}));

app.use("/api/library", libraryRoutes);

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server started on: http://localhost:${port}`);
    });
});