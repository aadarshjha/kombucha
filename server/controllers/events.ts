import Event from "../models/events";
// import mongoose from "mongoose";

import Express from "express";
// import { CallbackError } from "mongoose";
interface controller {
    (
        req: Express.Request,
        res: Express.Response,
        next: (err: Error) => void
    ): void;
}

export const list: controller = (_req, res, next) => {
    Event.find({}).exec((err: Error, events: unknown[]) => {
        if (err) {
            next(err);
        }
        res.json(events);
    });
};

export const create: controller = async (req, res, next) => {
    try {
        // Only create new event if the title doesn't exist already
        if (await Event.findOne({ title: req.body.title })) {
            res.send(`Event named ${req.body.title} already exists.\n`);
        } else {
            await Event.create({
                title: req.body.title,
                image: req.body.imageString,
                body: req.body.body,
            });
            res.send(`Successfully created new event: ${req.body.title}\n`);
        }
    } catch (err) {
        next(err);
        res.send(
            "Creating new event failed. Maybe check to see that all fields are included.\n"
        );
    }
};

export const remove: controller = async (req, res, next) => {
    try {
        const deletedEvent = await Event.findByIdAndDelete(req.params.id);
        res.send(`Successfully deleted event titled ${deletedEvent.title}\n`);
    } catch (err) {
        next(err);
        res.send("Deleting event failed. Maybe check that you got the ID right.\n");
    }
};

export const update: controller = async (req, res, next) => {
    try {
        const updatedEvent = await Event.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        });
        res.send(`Successfully updated event with ID: ${updatedEvent._id}\n`);
    } catch (err) {
        next(err);
        res.send(
            "Updating event failed. Maybe check that you got the ID and event fields right.\n"
        );
    }
};
// export const deleteGet = async (req: any, res: any) => {
//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id))
//     return res.status(404).send(`No post with id: ${id}`);
//   const event = await Event.findById(id);
//   res.json(event);
// };

// export const deletePost = async (req: any, res: any) => {
//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id))
//     return res.status(404).send(`No post with id: ${id}`);

//   await Event.findByIdAndRemove(id);

//   res.json({ message: "Post deleted successfully." });
// };

// export const updateGet = async (req: any, res: any) => {
//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id))
//     return res.status(404).send(`No post with id: ${id}`);
//   const event = await Event.findById(id);
//   res.json(event);
// };

// export const updatePost = async (req: any, res: any) => {
//   const { id } = req.params;
//   const { title, image, body } = req.body;

//   if (!mongoose.Types.ObjectId.isValid(id))
//     return res.status(404).send(`No post with id: ${id}`);

//   const updatedEvent = { title, image, body };

//   await Event.findByIdAndUpdate(id, updatedEvent, { new: true });

//   res.json(updatedEvent);
// };
