import express from "express";
import * as eventController from "../controllers/events";

const eventRouter = express.Router();

// GET request: this will return all the events.
eventRouter.get("/", eventController.list);

// PUT request for creating new topic
eventRouter.put("/create", eventController.create);

// DELETE request to delete topic
eventRouter.delete("/:id/delete", eventController.remove);

// PATCH request to update topic
eventRouter.patch("/:id/update", eventController.update);

export default eventRouter;
