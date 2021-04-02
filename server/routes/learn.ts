import express from "express";
// controller modules
import * as topicController from "../controllers/topics";
import * as articleController from "../controllers/articles";
import * as authorController from "../controllers/authors";

const learnRouter = express.Router();

/* TOPIC ROUTES */
// Defines all routes relating to topics critical for the learn page. 

// PUT request for creating new topic
learnRouter.put("/topic/create", topicController.create);

// DELETE request to delete topic
learnRouter.delete("/topic/:id/delete", topicController.remove);

// PATCH request to update topic
learnRouter.patch("/topic/:id/update", topicController.update);

// GET all articles in topic
learnRouter.get("/topic/:id", topicController.articles);

//GET request for all topics
learnRouter.get("/topics", topicController.list);

// /* ARTICLE ROUTES */

// PUT request for creating new article
learnRouter.put("/article/create", articleController.create);

// DELETE request to delete article
learnRouter.delete("/article/:id/delete", articleController.remove);

// PATCH request to update article
learnRouter.patch("/article/:id/update", articleController.update);

// GET contents of article
learnRouter.get("/article/:id", articleController.getArticle);

//GET request for all articles
learnRouter.get("/articles", articleController.list);

// /* AUTHOR ROUTES */
// Defines the structure and the routes for the authors page. 

// PUT request for creating new author
learnRouter.put("/author/create", authorController.create);

// DELETE request to delete author
learnRouter.delete("/author/:id/delete", authorController.remove);

// PATCH request to update author
learnRouter.patch("/author/:id/update", authorController.update);

// GET all articles in author
learnRouter.get("/author/:id", authorController.articles);

//GET request for all authors
learnRouter.get("/authors", authorController.list);

export default learnRouter;
