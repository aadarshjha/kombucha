import express from "express";
// controller modules
import * as topicController from "../controllers/topics";
import * as articleController from "../controllers/articles";
import * as authorController from "../controllers/authors";
import auth from "../middleware/auth"

const learnRouter = express.Router();

/* TOPIC ROUTES */
// Defines all routes relating to topics critical for the learn page. 

// PUT request for creating new topic
learnRouter.put("/topic/create", auth, topicController.create);

// DELETE request to delete topic
learnRouter.delete("/topic/:id/delete", auth, topicController.remove);

// PATCH request to update topic
learnRouter.patch("/topic/:id/update", auth, topicController.update);

// GET all articles in topic
learnRouter.get("/topic/:id", topicController.articles);

//GET request for all topics
learnRouter.get("/topics", topicController.list);

// /* ARTICLE ROUTES */

// PUT request for creating new article
learnRouter.put("/article/create", auth, articleController.create);

// DELETE request to delete article
learnRouter.delete("/article/:id/delete", auth, articleController.remove);

// PATCH request to update article
learnRouter.patch("/article/:id/update", auth, articleController.update);

// GET contents of article
learnRouter.get("/article/:id", articleController.getArticle);

//GET request for all articles
learnRouter.get("/articles", articleController.list);

// /* AUTHOR ROUTES */
// Defines the structure and the routes for the authors page. 

// PUT request for creating new author
learnRouter.put("/author/create", auth, authorController.create);

// DELETE request to delete author
learnRouter.delete("/author/:id/delete", auth, authorController.remove);

// PATCH request to update author
learnRouter.patch("/author/:id/update", auth, authorController.update);

// GET all articles in author
learnRouter.get("/author/:id", authorController.articles);

//GET request for all authors
learnRouter.get("/authors", authorController.list);

export default learnRouter;
