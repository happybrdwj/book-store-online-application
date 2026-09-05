import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"

import bookRoute from "./router/Book.route.js"
import userRoute from "./router/user.route.js"
const app = express();
app.use(express.json());


dotenv.config();
app.use(cors());
const PORT = process.env.PORT || 4000;


// connect to mongodb
const URI = process.env.MongodbURI;

try {
  mongoose.connect(URI);
  console.log("connected to mongodb")
} catch (error) {
  console.log("error: ")
}

// defining routes
app.use("/book", bookRoute)
app.use("/user", userRoute)


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});