import { connectDB } from "@/app/config/dbConfig";
import { EventRegistration } from "@/app/models/participant";
import { NextResponse } from "next/server";

connectDB();

export async function GET(request) {
	try {
		const registrations = await EventRegistration.find();
        return NextResponse.json(registrations);
	} catch (error) {
		console.log("Error fetching registrations.", error);
		return NextResponse.json(error);
	}
}
