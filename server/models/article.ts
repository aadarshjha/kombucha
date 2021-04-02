import mongoose from "mongoose";

const Schema = mongoose.Schema;

// defines the schema by which we characterize an article. 
const ArticleSchema = new Schema({
    title: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "Author", required: true },
    dateUpdated: { type: Date, required: true },
    topic: { type: Schema.Types.ObjectId, ref: "Topic", required: true },
    content: { type: String, required: true }
});

export default mongoose.model("Article", ArticleSchema);
