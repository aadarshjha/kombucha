// import async from "async";
import Express from "express";
// import models
import Topic from "../models/topic";
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
	Topic.find({}, "name").exec((err: Error, topicNames: string[]) => {
		if (err) {
			next(err);
		}
		res.json(topicNames);
	});
};

export const create: controller = async (req, res, next) => {

	try {
		// Only create new topic if the name doesn't exist already
		if (await Topic.findOne({ name: req.body.name })) {
			res.send(`Topic named ${req.body.title} already exists.\n`);
		} else {
			await Topic.create({
				name: req.body.name
			});
			res.send(`Successfully created new topic: ${req.body.name}\n`);
		}
	} catch (err) {
		next(err);
		res.send(
			"Creating new topic failed. Maybe check to see that all fields are included.\n"
		);
	}

};

export const remove: controller = async (req, res, next) => {
	try {
		const deletedTopic = await Topic.findByIdAndDelete(req.params.id);
		res.send(`Successfully deleted topic titled ${deletedTopic.name}\n`);
	} catch (err) {
		next(err);
		res.send("Deleting topic failed. Maybe check that you got the ID right.\n");
	}
};

export const update: controller = async (req, res, next) => {
	try {
		const updatedTopic = await Topic.findByIdAndUpdate(req.params.id, {
			$set: req.body,
		});
		res.send(`Successfully updated event with ID: ${updatedTopic._id}\n`);
	} catch (err) {
		next(err);
		res.send(
			"Updating topic failed. Maybe check that you got the ID and topic fields right.\n"
		);
	}
};