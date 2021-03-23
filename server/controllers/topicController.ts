// import async from "async";
import Express from "express";
// import models
import Topic from "../models/topic";
// import Article from "../models/article";

// export const createGet = (req, res, next) => {};
interface controller {
  (
    req: Express.Request,
    res: Express.Response,
    next: (err: Error) => void
  ): void;
}

export const list: controller = (_req, res, next) => {
  Topic.find({}, "name").exec((err: Error, topicNames: string[]) => {
    if (err) {
      next(err);
    }
    res.json(topicNames);
  });
};

export const createPut: controller = async (req, res, next) => {
  const topic = new Topic({
    name: req.body.name,
  });
  await topic.save((err: Error) => {
    next(err);
  });

  res.send(`Successfully created new topic: ${req.body.name}\n`);
};

export const updatePatch: controller = async (req, res, next) => {
  const oldName = req.params.name;
  const newName = req.body.name;
  Topic.findOneAndUpdate({ name: oldName }, { name: newName }).exec(
    (_: string, err: Error) => {
      next(err);
    }
  );
  res.send(`Successfully updated topic '${oldName}' to '${newName}'`);
};
