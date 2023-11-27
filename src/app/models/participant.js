import mongoose from "mongoose";

const eventRegistrationSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	phone: {
		type: Number,
		required: true,
	},
	eventName: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now(),
	},
	imageUrl:{
		type:String,
		required:true
	},
	participants: [
		{
			name: {
				type: String,
			},
			email: {
				type: String,
			},
		},
	],
});

export const EventRegistration =
	mongoose.models.participants ||
	mongoose.model("participants", eventRegistrationSchema);
