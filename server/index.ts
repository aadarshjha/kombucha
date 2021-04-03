import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import eventRouter from "./routes/events";
import learnRouter from "./routes/learn";

// using express to support our backend. 
const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

// hosts on port 5000
const PORT = process.env.PORT || 5000;
const CONNECTION_URL: string = process.env.CONNECTION_URL as string;

// connecting to the DB. 
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);

const db = mongoose.connection;

// using routing defined in the routes/ folder. 
db.on("error", console.error.bind(console, "MongoDB connection error:"));
app.use("/events", eventRouter);
app.use("/learn", learnRouter);