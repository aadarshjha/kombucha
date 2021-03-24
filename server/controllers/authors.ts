// import async from "async";
import Express from "express";
// import models
import Author from "../models/author";
// import Article from "../models/article";

// export const createGet = (req, res, next) => {};

//TODO: Handle delete with articles. 

interface controller {
    (
        req: Express.Request,
        res: Express.Response,
        next: (err: Error) => void
    ): void;
}

export const list: controller = (_req, res, next) => {
    Author.find({}).exec((err: Error, authors: unknown[]) => {
        if (err) {
            next(err);
        }
        res.json(authors);
    });
};

export const create: controller = async (req, res, next) => {

    try {
        // Only create new topic if the name doesn't exist already
        if (await Author.findOne({ name: req.body.name })) {
            res.send(`Topic named ${req.body.name} already exists.\n`);
        } else {
            await Author.create({
                name: req.body.name,
                year: req.body.year,
                majors: req.body.majors
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

export const remove: controller = async (req, res, next) => {
    try {
        const deletedAuthor = await Author.findByIdAndDelete(req.params.id);
        res.send(`Successfully deleted author named ${deletedAuthor.name}\n`);
    } catch (err) {
        next(err);
        res.send("Deleting author failed. Maybe check that you got the ID right.\n");
    }
};

export const update: controller = async (req, res, next) => {
    try {
        const updatedAuthor = await Author.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        });
        res.send(`Successfully updated author with ID: ${updatedAuthor._id}\n`);
    } catch (err) {
        next(err);
        res.send(
            "Updating author failed. Maybe check that you got the ID and author fields right.\n"
        );
    }
};