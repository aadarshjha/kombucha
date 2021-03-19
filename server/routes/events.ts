import express from "express";
import * as eventController from "../controllers/eventController";

const eventRouter = express.Router();

// here we define all the routes: 

// get request 
// this will return all the events. 
eventRouter.get("/", eventController.list)


// POST request for creating new topic
/*
eventRouter.post("/create", eventController.createPost);

// GET request to delete topic
eventRouter.get("/:id/delete", eventController.deleteGet);

// POST request to delete topic
eventRouter.post("/:id/delete", eventController.deletePost);

// GET request to update topic
eventRouter.get("/:id/update", eventController.updateGet);

// POST request to update topic
eventRouter.post("/:id/update", eventController.updatePost);

*/
export default eventRouter;