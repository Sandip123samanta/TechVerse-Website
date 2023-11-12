import { NextResponse,NextRequest } from "next/server";

export async function POST(request) {
	try {
		const { email, name , nothing , eventName } = await request.json();
        console.log(email, name , nothing , eventName);
		return NextResponse.json("Done");
	} catch (error) {
		console.log("Error to get data...");
		return NextResponse.error();
	}
}