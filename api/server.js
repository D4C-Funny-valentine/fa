import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/databaseConnect.js";

const app = express();
const port = process.env.PORT || 5000;

// build in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// connect to database
connectDB();

// start server

app.listen(port, () => {
  console.log(`Server is running on port at http://localhost:${port}`);
});
