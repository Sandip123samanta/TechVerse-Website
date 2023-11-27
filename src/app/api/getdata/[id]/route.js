import { connectDB } from "@/app/config/dbConfig";
import { NextResponse } from "next/server";
import { EventRegistration } from "@/app/models/participant";

connectDB();

export async function GET(request,{ params }) {
	const id = params.id;
	try {
		const res = await EventRegistration.findById(id);
		return NextResponse.json({
			message: "Data Fetched.",
			data: res,
		});
	} catch (error) {
		console.error("Error fetching user data.", error);
		return NextResponse.json(error);
	}
}
