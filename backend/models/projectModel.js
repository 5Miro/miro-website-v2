import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    thumbnail: { type: String },
    description: { type: String, required: true },
    tech: [{ type: String }],
    repository: { type: String }
})

const Project = mongoose.model("Project", projectSchema);
export default Project;