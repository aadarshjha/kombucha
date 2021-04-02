import mongoose from "mongoose";

const Schema = mongoose.Schema;

// defines the schema by which we characterize a topic. 
const TopicSchema = new Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 100 },
});

export default mongoose.model("Topic", TopicSchema);
