import mongoose from "mongoose";

export const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI, {
			dbName: "api_testing",
		});
		console.log("Database Connected...");
	} catch (error) {
		console.log("Faild to Connect With Database...");
		console.log(error);
	}
};
