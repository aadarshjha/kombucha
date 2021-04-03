import Express from "express";
import Topic from "../models/topic";
import Article from "../models/article";

// defines the typescript definition of controllers
// requests and responses. 
interface controller {
  (
    req: Express.Request,
    res: Express.Response,
    next: (err: Error) => void
  ): void;
}

// lists all the educational topics. 
export const list: controller = (_req, res, next) => {
  Topic.find({}, "name").exec((err: Error, topicNames: string[]) => {
    if (err) {
      next(err);
      res.send(`Failed to get topics.`);
    }
    res.json(topicNames);
  });
};

// creates a new topic. 
export const create: controller = async (req, res, next) => {
  try {
    // Only create new topic if the name doesn't exist already
    if (await Topic.findOne({ name: req.body.name })) {
      res.send(`Topic named ${req.body.name} already exists.\n`);
    } else {
      await Topic.create({
        name: req.body.name,
      });
      res.send(`Successfully created new topic: ${req.body.name}\n`);
    }
  } catch (err) {
    next(err);
    res.send(
      `Creating new topic failed. Maybe check to see that all fields are included.\n${err}`
    );
  }
};

// removes a particular topics and associated articles. 
export const remove: controller = async (req, res, next) => {
  try {
    // Remove all articles associated with the topic
    await Article.deleteMany({ topic: req.params.id });
  } catch (err) {
    next(err);
    res.send(
      `Failed to delete all articles associated with topic with id: ${req.params.id}. Check to see that id is correct. Topic has not been deleted.\n${err}\n`
    );
  }
  try {
    // Remove the topic itself
    const deletedTopic = await Topic.findByIdAndDelete(req.params.id);
    res.send(
      `Successfully deleted topic titled ${deletedTopic.name} and underlying articles.\n`
    );
  } catch (err) {
    next(err);
    res.send(
      `Articles deleted successfully but deleting topic failed. Maybe check that you got the ID right.\n${err}\n`
    );
  }
};

// updates a particular topic
export const update: controller = async (req, res, next) => {
  try {
    const updatedTopic = await Topic.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.send(`Successfully updated event with ID: ${updatedTopic._id}\n`);
  } catch (err) {
    next(err);
    res.send(
      `Updating topic failed. Maybe check that you got the ID and topic fields right.\n${err}\n`
    );
  }
};

// gets all articles of a topic. 
export const articles: controller = async (req, res, next) => {
  Article.find({ topic: req.params.id })
    .populate("author", "name")
    .populate("topic", "name")
    .exec((err: Error, articles: unknown[]) => {
      if (err) {
        next(err);
        res.send(
          `Failed to get the articles of this topic. Please contact the boys.\n${err}\n`
        );
      }
      res.json(articles);
    });
};
