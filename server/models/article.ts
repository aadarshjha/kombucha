import mongoose from "mongoose";

const Schema = mongoose.Schema;

/*
Possibly useful things:
- Having cross-topic articles
- Having articles in the same category be different difficulty
*/

const ArticleSchema = new Schema({
  title: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "Author", required: true },
  dateUpdated: { type: Date, required: true },
  topic: { type: Schema.Types.ObjectId, ref: "Topic", required: true },
});

// TODO: virtuals

export default mongoose.model("Article", ArticleSchema);
