import Event from "../models/events"
import mongoose from "mongoose";

export const list = async (_req: any, res: any) => {
    try {
        const events = await Event.find();

        res.status(200).json(events);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const createPost = async (req: any, res: any) => {
    const { title, image, body } = req.body;

    const newEvent = new Event({ title, image, body });

    try {
        await newEvent.save();

        res.status(201).json(newEvent);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteGet = async (req: any, res: any) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    const event = await Event.findById(id);
    res.json(event);
}

export const deletePost = async (req: any, res: any) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Event.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export const updateGet = async (req: any, res: any) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    const event = await Event.findById(id);
    res.json(event);
}

export const updatePost = async (req: any, res: any) => {
    const { id } = req.params;
    const { title, image, body } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedEvent = { title, image, body };

    await Event.findByIdAndUpdate(id, updatedEvent, { new: true });

    res.json(updatedEvent);
}
