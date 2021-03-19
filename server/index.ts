import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// Routers
// import indexRouter from "./routes/index";
// import learnRouter from "./routes/learn";
import eventRouter from "./routes/events";

const app = express();
dotenv.config();

app.use(cors());

const PORT = process.env.PORT || 5000;
const CONNECTION_URL: string = process.env.CONNECTION_URL as string;

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

app.use("/events", eventsRouter);

// app.use("/", indexRouter);
// app.use("/learn", learnRouter);

// TODO: implement if necessary. Otherwise everything goes into indexRouter.

// app.use('/about', aboutRouter);
