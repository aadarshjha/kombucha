import express from "express";
import * as eventController from "../controllers/events";

const eventRouter = express.Router();

// here we define all the routes:

// GET request: this will return all the events.
eventRouter.get("/", eventController.list);

// POST request for creating new topic
eventRouter.put("/create", eventController.create);

// // GET request to delete topic
// eventRouter.get("/:id/delete", eventController.removeGet);

// // POST request to delete topic
eventRouter.delete("/:id/delete", eventController.remove);

// // GET request to update topic
// eventRouter.get("/:id/update", eventController.updateGet);

// // POST request to update topic
eventRouter.patch("/:id/update", eventController.update);

export default eventRouter;
