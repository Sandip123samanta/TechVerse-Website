import { connectDB } from "@/app/config/dbConfig";
import { EventRegistration } from "@/app/models/participant";
import { NextResponse } from "next/server";

connectDB();

export async function GET(request) {
	try {
		const registrations = await EventRegistration.find();

		// Set Cache-Control header to prevent caching
		const response = NextResponse.json(registrations);
		response.headers.set(
			"Cache-Control",
			"no-cache, no-store, must-revalidate"
		);

		return response;
	} catch (error) {
		console.log("Error fetching registrations.", error);
		return NextResponse.json(error);
	}
}
