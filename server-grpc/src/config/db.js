import mongoose from "mongoose";
import { config } from "./config.js";

export const connectToDatabase = async () => {
	try {
		console.log("connecting to db ->", config.mongoURI);
		await mongoose.connect(config.mongoURI);

		const db = mongoose.connection;

		db.on(
			"error",
			console.error.bind(console, "MongoDB connection error:")
		); 
	} catch (error) {
		console.log(error);
	}
};
