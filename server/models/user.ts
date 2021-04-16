import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: { type: String },
  name: { type: String, required: false },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

export default mongoose.model("User", userSchema);
