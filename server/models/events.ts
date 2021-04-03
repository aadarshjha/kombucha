import mongoose from "mongoose";

const Schema = mongoose.Schema;

// defines the schema by which we characterize an events. 
const EventSchema = new Schema({
  title: { type: String, required: true, minlength: 3, maxlength: 100 },
  image: { type: String, required: true },
  body: { type: String, required: true },
});

export default mongoose.model("Event", EventSchema);
