import Event from "../models/events";
import Express from "express";

// defines the typescript definition of controllers
// requests and responses. 
interface controller {
  (
    req: Express.Request,
    res: Express.Response,
    next: (err: Error) => void
  ): void;
}

// lists all events. 
export const list: controller = (_req, res, next) => {
  Event.find({}).exec((err: Error, events: unknown[]) => {
    if (err) {
      next(err);
      res.send(
        `Getting the list of events failed.`
      );
    }
    res.json(events);
  });
};

// creates a new event. 
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
      `Creating new event failed. Maybe check to see that all fields are included.\n${err}\n`
    );
  }
};

// removes an event. 
export const remove: controller = async (req, res, next) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);
    res.send(`Successfully deleted event titled ${deletedEvent.title}\n`);
  } catch (err) {
    next(err);
    res.send(
      `Deleting event failed. Maybe check that you got the ID right.\n${err}\n`
    );
  }
};

// updates an event. 
export const update: controller = async (req, res, next) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.send(`Successfully updated event with ID: ${updatedEvent._id}\n`);
  } catch (err) {
    next(err);
    res.send(
      `Updating event failed. Maybe check that you got the ID and event fields right.\n${err}\n`
    );
  }
};