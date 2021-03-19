import async from "async";
// import models
import Topic from "../models/topic";
import Article from "../models/article";

// export const createGet = (req, res, next) => {};

export const list = (req: Request, res: unknown, next: unknown): unknown => {
  Topic.find().exec(function (err: unknown, list_genres: unknown) {
    if (err) {
      return next(err);
    }
    res.send("genre_list", { title: "Genre List", list_genres: list_genres });
  });
};

// export const;
