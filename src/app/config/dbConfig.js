import mongoose from "mongoose";

export const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URL, {
			dbName: "Event_Registration",
		});
		console.log("Database Connected...");
	} catch (error) {
		console.log("Faild to Connect With Database...");
		console.log(error);
	}
};
