import express from "express";
// controller modules
import topicController from "../controllers/topicController";
import articleController from "../controllers/articleController";
import authorController from "../controllers/authorController";

const router = express.Router();

// TODO: implement lol

/* TOPIC ROUTES */

// POST request for creating new topic
router.post("/topic/create", topicController.createGet);

// GET request to delete topic
router.get("/topic/:id/delete", topicController.deleteGet);

// POST request to delete topic
router.get("/topic/:id/delete", topicController.deletePost);

// GET request to update topic
router.get("/topic/:id/update", topicController.updateGet);

// POST request to update topic
router.get("/topic/:id/update", topicController.updatePost);

// GET all articles in topic
router.get("/topic/:id", topicController.contentsGet);

//GET request for all topics
router.get("/topics", topicController.list);

/* ARTICLE ROUTES */

// POST request for creating new article
router.post("/article/create", articleController.createGet);

// GET request to delete article
router.get("/article/:id/delete", articleController.deleteGet);

// POST request to delete article
router.get("/article/:id/delete", articleController.deletePost);

// GET request to update article
router.get("/article/:id/update", articleController.updateGet);

// POST request to update article
router.get("/article/:id/update", articleController.updatePost);

// GET contents of article
router.get("/article/:id", articleController.contentsGet);

//GET request for all articles
router.get("/articles", articleController.list);

/* AUTHOR ROUTES */

// POST request for creating new author
router.post("/author/create", authorController.createGet);

// GET request to delete author
router.get("/author/:id/delete", authorController.deleteGet);

// POST request to delete author
router.get("/author/:id/delete", authorController.deletePost);

// GET request to update author
router.get("/author/:id/update", authorController.updateGet);

// POST request to update author
router.get("/author/:id/update", authorController.updatePost);

// GET all articles in author
router.get("/author/:id", authorController.contentsGet);

//GET request for all authors
router.get("/authors", authorController.list);

export default router;
