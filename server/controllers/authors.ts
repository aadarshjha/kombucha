import Express from "express";
import Author from "../models/author";
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

// lists all authors.
export const list: controller = (_req, res, next) => {
  Author.find({}).exec((err: Error, authors: unknown[]) => {
    if (err) {
      next(err);
      res.send("Getting list of authors failed.");
    }
    res.json(authors);
  });
};

// creates a new author.
export const create: controller = async (req: any, res: any, next: any) => {
  if (!req.userId) {
    res.send("User Unathenticated");
  }
  try {
    // Only create new topic if the name doesn't exist already
    if (await Author.findOne({ name: req.body.name })) {
      console.log("\n before res  \n");
      res.send(`Author ${req.body.name} already exists.\n`);
    } else {
      await Author.create({
        name: req.body.name,
        year: req.body.year,
        majors: req.body.majors,
      });

      res.send(`Successfully created new author: ${req.body.name}\n`);
    }
  } catch (err) {
    next(err);
    res.send(
      "Creating new author failed. Maybe check to see that all fields are included.\n"
    );
  }
};

// removes a particular author, and all articles associated with that particular author.
export const remove: controller = async (req: any, res: any, next: any) => {
  if (!req.userId) {
    res.send("User Unathenticated");
  }

  try {
    // Remove all articles associated with the topic
    await Article.deleteMany({ author: req.params.id });
  } catch (err) {
    next(err);
    res.send(
      `Failed to delete all articles written by author with id: ${req.params.id}. Check to see that id is correct. Author has not been deleted.\n${err}\n`
    );
  }
  try {
    // Remove the topic itself
    const deletedAuthor = await Author.findByIdAndDelete(req.params.id);
    res.send(
      `Successfully deleted author named ${deletedAuthor.name} and their articles.\n`
    );
  } catch (err) {
    next(err);
    res.send(
      `Articles deleted successfully but deleting author failed. Maybe check that you got the ID right.\n${err}\n`
    );
  }
};

// updates a particular author.
export const update: controller = async (req: any, res: any, next: any) => {
  if (!req.userId) {
    res.send("User Unathenticated");
  }

  try {
    const updatedAuthor = await Author.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.send(`Successfully updated author with ID: ${updatedAuthor._id}\n`);
  } catch (err) {
    next(err);
    res.send(
      `Updating author failed. Maybe check that you got the ID and author fields right.\n${err}\n`
    );
  }
};

// finds all articles of a particular author.
export const articles: controller = async (req, res, next) => {
  Article.find({ author: req.params.id })
    .populate("author", "name")
    .populate("topic", "name")
    .exec((err: Error, articles: unknown[]) => {
      if (err) {
        next(err);
        res.send(
          `Failed to get the articles of this author. Please contact the boys.\n${err}\n`
        );
      }
      res.json(articles);
    });
};
