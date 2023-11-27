import { connectDB } from "@/app/config/dbConfig";
import { adminModel } from "@/app/models/admin";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

connectDB();

export async function POST(request) {
	try {
		const { userName, password } = await request.json();
		const admin = await adminModel.findOne({ userName: userName });
		if (admin == null) {
			throw new Error();
		}
		//2. Match The Password...
		const passMatch = await bcrypt.compare(password, admin.password);
		if (!passMatch) {
			throw new Error();
		}
		//3.Generate Token...
		const token = jwt.sign(
			{
				_id: admin._id,
				userName: admin.userName,
			},
			process.env.SECRET_KEY
		);
		//4.Generate Cookie...
		const response = NextResponse.json({
			message: "Done.",
			success: true,
		});
		response.cookies.set("authToken", token, {
			expiresIn: "2d",
		});
		//Return the response....
		return response;
	} catch (error) {
		console.error("Error To Login.", error);
		return NextResponse.json(error);
	}
}
