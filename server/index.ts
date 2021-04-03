import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import eventRouter from "./routes/events";
import learnRouter from "./routes/learn";
// import router as learnRouter from "./routes/learnRouter";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
let CONNECTION_URL: string;

if (process.env.NODE_ENV === "test") {
  CONNECTION_URL = process.env.TEST_CONNECTION_URL as string;
} else {
  CONNECTION_URL = process.env.CONNECTION_URL as string;
}
console.log(`Connection URL: ${CONNECTION_URL}`);

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
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/events", eventRouter);

// app.use("/", indexRouter);
app.use("/learn", learnRouter);

// TODO: implement if necessary. Otherwise everything goes into indexRouter.

// app.use('/about', aboutRouter);
