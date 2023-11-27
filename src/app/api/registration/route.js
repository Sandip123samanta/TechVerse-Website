import { connectDB } from "@/app/config/dbConfig";
import { NextResponse } from "next/server";
import { EventRegistration } from "@/app/models/participant";

connectDB();

export async function POST(request) {
	const { name, email, phone, eventName, imageUrl, participants } =
		await request.json();
	try {
		const newRegistration = new EventRegistration({
			name,
			email,
			phone,
			eventName,
			imageUrl: imageUrl,
			participants,
		});
		const res = await newRegistration.save();
		return NextResponse.json({
			message: "Registration Done.",
			data: res,
		});
	} catch (error) {
		console.error("Error To Registration.", error);
		return NextResponse.json(error);
	}
}
