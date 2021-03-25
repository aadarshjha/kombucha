// import async from "async";
import Express from "express";
// import models
import Article from "../models/article";

// export const createGet = (req, res, next) => {};

interface controller {
  (
    req: Express.Request,
    res: Express.Response,
    next: (err: Error) => void
  ): void;
}

export const list: controller = (_req, res, next) => {
  Article.find({})
    .populate("author", "name")
    .populate("topic", "name")
    .exec((err: Error, articles: unknown[]) => {
      if (err) {
        next(err);
        res.send("Failed to get list of articles. Please contact the boys.");
      }
      res.json(articles);
    });
};

export const create: controller = async (req, res, next) => {
  try {
    // Only create new topic if the name doesn't exist already
    if (await Article.findOne({ name: req.body.title })) {
      res.send(`Topic named ${req.body.title} already exists.\n`);
    } else {
      await Article.create({
        title: req.body.title,
        author: req.body.author,
        dateUpdated: req.body.dateUpdated,
        topic: req.body.topic,
        content: req.body.content,
      });
      res.send(`Successfully created new article: ${req.body.title}\n`);
    }
  } catch (err) {
    next(err);
    res.send(
      `Creating new article failed. Maybe check to see that all fields are included.\n${err}\n`
    );
  }
};

export const remove: controller = async (req, res, next) => {
  try {
    const deletedArticle = await Article.findByIdAndDelete(req.params.id);
    res.send(`Successfully deleted author named ${deletedArticle.name}\n`);
  } catch (err) {
    next(err);
    res.send(
      `Deleting article failed. Maybe check that you got the ID right.\n${err}\n`
    );
  }
};

export const update: controller = async (req, res, next) => {
  try {
    const updatedArticle = await Article.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.send(`Successfully updated article with ID: ${updatedArticle._id}\n`);
  } catch (err) {
    next(err);
    res.send(
      `Updating article failed. Maybe check that you got the ID and title fields right.\n${err}\n`
    );
  }
};

export const getArticle: controller = async (req, res, next) => {
  try {
    const article = await Article.findById(req.params.id)
      .populate("author")
      .populate("topic");
    res.send(article);
  } catch (err) {
    next(err);
    res.send(
      `Getting article failed. Maybe check that you got the ID field right.\n${err}\n`
    );
  }
};
