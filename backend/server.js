// Imports
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import projectRouter from "./routers/projectRouter.js"
import nodemailerRouter from "./routers/nodemailerRouter.js"

// Get enviromental variables
dotenv.config();

// Initialize express
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to DB
const DB = process.env.MONGODB_URL;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(con => {
    console.log("DB connection succesful.");
}).catch(err => {
    console.log("DB connection failed.")
});


// Routing 

app.use("/api/projects", projectRouter)

app.use("/api/contact", nodemailerRouter)

app.get("/", (req, res) => {
    res.send("Server is ready");
});

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message }); // show error for async api requests
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
})