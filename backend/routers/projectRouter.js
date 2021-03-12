import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Project from "../models/projectModel.js";

const projectRouter = express.Router();

projectRouter.get(
	"/seed",
	expressAsyncHandler(async (req, res) => {
		//const createdProjects = await Project.insertMany(data.projects);
		//res.send({ createdProjects });
	})
);

projectRouter.get(
	"/",
	expressAsyncHandler(async (req, res) => {
		const data = await Project.find({}).sort({ _id: 1 });
		res.send(data);
	})
);

export default projectRouter;
