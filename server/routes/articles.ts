import express from "express";
import { getPosts } from '../controllers/articles.ts"';

const router = express.Router();

router.get("/", getArticles);

export default router;
