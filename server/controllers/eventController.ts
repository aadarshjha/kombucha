import Event from "../models/events"


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