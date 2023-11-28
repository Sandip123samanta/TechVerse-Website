"use client";
import React, { useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import axios from "axios";
import Contact from "../../eventDetails/Contact";

const Page = () => {
	const router = useRouter();
	const [file, setFile] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		imageUrl: "",
		eventName: "Bishop's Battle",
	});

	const handleForm = async (event) => {
		event.preventDefault();
		try {
			setIsLoading(true);
			// For Image Upload..
			const inputFileData = new FormData();
			inputFileData.append("file", file);
			inputFileData.append("upload_preset", "techimage");
			const data = await axios.post(
				"https://api.cloudinary.com/v1_1/techverse/image/upload",
				inputFileData
			);
			const imageUrl = await data.data.secure_url;
			// Send The Data in Backend..
			const res = await axios.post("/api/registration", {
				...formData,
				imageUrl: imageUrl,
			});
			// Check The Backend Response...
			if (res.data.message === "Registration Done.") {
				setIsLoading(false);
				toast.success("Registration Done", {
					position: "top-center",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "colored",
				});
				const id = res.data.data._id;
				router.push(`/eventregistration/eventticket/${id}`);
			} else {
				throw new Error("Backend registration failed");
			}
		} catch (error) {
			setIsLoading(false);
			toast.error("Error to Register.", {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "colored",
			});
			console.error("Error", error);
		}
	};

	const contactDetails = {
		details:
			"Welcome to the world of chess, a timeless gamewhere strategy, foresight, and skill converge on the 64 squares.",
		headName: "ASIF ANSARI",
		headPhoneNo: "8482029589",
		headEmailId: "asinasimansari10@gmail.com",
		coHeadName: "DOSTI RATHI",
		coHeadPhoneNo: "9508646278",
		coHeadEmailId: "dostirathi031@gmail.com",
	};

	const rules = [
		"1.For each win, a player wil score 1point. For a draw, 1/2 point. And for a loss, o point.fI a participant fails to be present during his/her match time, he/she will be disqualified, and there will not be any refund.",
		"2.There will be 3 rounds on the Day-1 of Tournament-1 (knock-out format).(Please note that the number of rounds and time control may change according to the number of participants).",
		"3.The top 6 players from DAY-1 (Tournament-1) will play on the DAY-2 (Tournament-2). Tournament-2 will be a Swiss tournament.",
		"4.The time control of each game in Tournament-1,si 10 minutes +Oseconds increment each player, i.e each game will be 20 minutes.",
		"5.The time control of each game in Tournament-2, is 15 minutes + Oseconds increment each player, i.e each game will be 30 minutes.In case, one's time runs out, the opponent si automatically declared as the winner of the match.",
		"6. Please go through rules like en-passant, illegal moves, pawn promotion, 3-fold repetition rule, 50 moves draw rule,'touch-move' and castling.",
		"7.Players wil be disqualified, fi found cheating.fI participants face any problem, contact the coordinators or volunteers immediately.",
		"8. In case of dispute, the event head's decision wil be final.",
	]

	return (
		<div className="h-screen w-screen md:h-auto md:flex gap-20 justify-center items-center md:mt-24">
			<Contact params={contactDetails} rules={rules} imgUrl={"/EventPageImg/Chess.jpeg"}/>
			<div className="flex items-center justify-center text-black font-roboto">
				<div className="bg-white p-8 rounded shadow-md w-[30rem]">
					<h1 className="text-3xl font-semibold text-center mb-4">
						Bishop&apos;s Battle
					</h1>
					<form onSubmit={handleForm}>
						<div className="mb-4">
							<label className="block text-gray-700">
								Email:
							</label>
							<input
								onChange={(event) => {
									setFormData({
										...formData,
										email: event.target.value,
									});
								}}
								value={formData.email}
								type="email"
								required={true}
								className="w-full border rounded p-2 focus:outline-none focus:border-blue-500"
							/>
						</div>
						<div className="flex gap-2">
							<div className="mb-4">
								<label className="block text-gray-700">
									Name:
								</label>
								<input
									onChange={(event) => {
										setFormData({
											...formData,
											name: event.target.value,
										});
									}}
									value={formData.name}
									type="text"
									required={true}
									className="w-full border rounded p-2 focus:outline-none focus:border-blue-500"
								/>
							</div>
							<div className="mb-4">
								<label className="block text-gray-700">
									Phone Number:
								</label>
								<input
									onChange={(event) => {
										setFormData({
											...formData,
											phone: event.target.value,
										});
									}}
									value={formData.phone}
									type="phone"
									required={true}
									className="w-full border rounded p-2 focus:outline-none focus:border-blue-500"
								/>
							</div>
						</div>
						<h1 className="text-red-600">
							* BISHOP&apos;S BATTLE : 50/- (Per head)
						</h1>
						<div className="mb-4 mt-4">
							<Image
								src="/qr_code.jpeg"
								width={200}
								height={200}
								alt="qrcode"
							/>
							<h1>UPI ID: <span className="text-orange-400">8170842884@paytm</span></h1>
						</div>
						<div className="mb-4">
							<label className="block text-gray-700">
								Payment Photo
							</label>
							<input
								onChange={(event) => {
									setFile(event.target.files[0]);
								}}
								accept="image/*"
								type="file"
								name="file"
								required={true}
								className="w-full border rounded p-2 focus:outline-none focus:border-blue-500"
							/>
						</div>
						<button
							type="submit"
							className="w-full bg-blue-500 text-black font-bold rounded py-2 hover:bg-blue-600 focus:outline-none"
						>
							{isLoading ? "Submitting..." : "Submit"}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Page;
