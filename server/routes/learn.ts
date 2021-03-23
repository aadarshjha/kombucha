import express from "express";
// controller modules
import * as topicController from "../controllers/topics";
// import articleController from "../controllers/articleController";
// import authorController from "../controllers/authorController";

const learnRouter = express.Router();

// TODO: implement lol

/* TOPIC ROUTES */

// PUT request for creating new topic
learnRouter.put("/topic/create", topicController.create);

// // GET request to delete topic
// learnRouter.get("/topic/:id/delete", topicController.deleteGet);

// // DELETE request to delete topic
// learnRouter.delete("/topic/:id/delete", topicController.deleteput);

// // GET request to update topic
// learnRouter.get("/topic/:id/update", topicController.updateGet);

// // PATCH request to update topic
learnRouter.patch("/topic/:name/update", topicController.update);

// // GET all articles in topic
// learnRouter.get("/topic/:id", topicController.contentsGet);

//GET request for all topics
learnRouter.get("/topics", topicController.list);

// /* ARTICLE ROUTES */

// // PUT request for creating new article
// learnRouter.put("/article/create", articleController.createGet);

// // GET request to delete article
// learnRouter.get("/article/:id/delete", articleController.deleteGet);

// // PUT request to delete article
// learnRouter.delete("/article/:id/delete", articleController.deleteput);

// // GET request to update article
// learnRouter.get("/article/:id/update", articleController.updateGet);

// // PATCH request to update article
// learnRouter.patch("/article/:id/update", articleController.updateput);

// // GET contents of article
// learnRouter.get("/article/:id", articleController.contentsGet);

// //GET request for all articles
// learnRouter.get("/articles", articleController.list);

// /* AUTHOR ROUTES */

// // PUT request for creating new author
// learnRouter.put("/author/create", authorController.createGet);

// // GET request to delete author
// learnRouter.get("/author/:id/delete", authorController.deleteGet);

// // DELETE request to delete author
// learnRouter.delete("/author/:id/delete", authorController.deleteput);

// // GET request to update author
// learnRouter.get("/author/:id/update", authorController.updateGet);

// // PATCH request to update author
// learnRouter.patch("/author/:id/update", authorController.updateput);

// // GET all articles in author
// learnRouter.get("/author/:id", authorController.contentsGet);

// //GET request for all authors
// learnRouter.get("/authors", authorController.list);

export default learnRouter;
