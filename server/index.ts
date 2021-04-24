import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
// import bodyParser from "body-parser";

import eventRouter from "./routes/events";
import learnRouter from "./routes/learn";
import userRouter from "./routes/user";

// using express to support our backend.
const app = express();
dotenv.config();

app.use(cors());

// hosts on port 5000
const PORT = process.env.PORT || 5000;
let CONNECTION_URL: string;

if (process.env.NODE_ENV === "test") {
  CONNECTION_URL = process.env.TEST_CONNECTION_URL as string;
} else {
  CONNECTION_URL = process.env.CONNECTION_URL as string;
}
console.log(`Connection URL: ${CONNECTION_URL}`);

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

app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use("/events", eventRouter);
app.use("/learn", learnRouter);
app.use("/user", userRouter);
