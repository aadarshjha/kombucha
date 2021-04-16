import mongoose from "mongoose";

const Schema = mongoose.Schema;

// defines the schema by which we characterize an author.
const AuthorSchema = new Schema({
  name: { type: String, required: true, maxlength: 100 },
  year: { type: String, required: true },
  majors: [{ type: String }],
});

export default mongoose.model("Author", AuthorSchema);
