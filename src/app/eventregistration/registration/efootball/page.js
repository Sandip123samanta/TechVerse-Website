"use client";
import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import StarsCanvas from "@/components/common/starbackground/StarBackground";
import Contact from "../../eventDetails/Contact";

const page = () => {
	const router = useRouter();
	const [file, setFile] = useState(null);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		imageUrl: "",
		eventName: "E-Football",
		participants: [],
	});

	const addParticipant = () => {
		setFormData({
			...formData,
			participants: [...formData.participants, { name: "", email: "" }],
		});
	};

	const removeParticipant = (index) => {
		const updatedParticipants = [...formData.participants];
		updatedParticipants.splice(index, 1);

		setFormData({
			...formData,
			participants: updatedParticipants,
		});
	};

	const handleForm = async (event) => {
		event.preventDefault();
		try {
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
			"Merging the pitch and pixel, this game redefines soccer gaming with realism, community, and esports thrill. Presenting E-FOOTBALL!",
		headName: "SAPTARSHI GHOSH",
		headPhoneNo: "8777479077",
		headEmailId: "ghoshsaptarshi117@gmail.com",
		coHeadName: "ANKIT DAS",
		coHeadPhoneNo: "9007405028",
		coHeadEmailId: "ddas29714@gmail.com",
	};
	const rules = [
		"1. All cards are allowed to use.Each participant should use account with ID entered during registration.",
		"2. During match if anyone uses slang he will be shown yellow card 2 yellow card means red card which cause him suspend for 1Match.iPads or any sort of tablets are not allowed. External accessories like joystick or trigger are not allowed.",
		"3. If anyone issues lag or network issues during the match and gets disconnected then a rematch with remaining time would be arranged keeping the previous score in record.In case of tie between two teams GD will be considered.",
		"4. The registration fee is non-refundable. Custom formation (convert from PC) is not allowed. No online participation is allowed.",
		"5. Dream Team &Username should not be changed till the tournament ends and every participant should use the same model team (Dream Team) &username as they've filled during registration.",
		"6. Tournament type: 3v3 (+1 sub).Late entries would not be entertained."
	]

	return (
		<div className="h-screen w-screen md:h-auto md:flex gap-20 justify-center items-center md:mt-24">
			<StarsCanvas />
			<Contact params={contactDetails} rules={rules} imgUrl={"/EventPageImg/E football.jpeg"} />
			<div className="flex items-center justify-center text-black font-roboto">
				<div className="bg-white p-8 rounded shadow-md w-[30rem]">
					<h1 className="text-3xl font-semibold text-center mb-4">
						E-Football
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
						{formData.participants.map((participant, index) => (
							<div key={index}>
								<div className="flex gap-1">
									<input
										type="text"
										placeholder={`Participant ${
											index + 1
										} Name`}
										value={participant.name}
										onChange={(e) =>
											setFormData({
												...formData,
												participants:
													formData.participants.map(
														(p, i) =>
															i === index
																? {
																		...p,
																		name: e
																			.target
																			.value,
																  }
																: p
													),
											})
										}
										className="w-full border rounded p-2 focus:outline-none focus:border-blue-500"
									/>
									<input
										type="email"
										placeholder={`Participant ${
											index + 1
										} Email`}
										value={participant.email}
										onChange={(e) =>
											setFormData({
												...formData,
												participants:
													formData.participants.map(
														(p, i) =>
															i === index
																? {
																		...p,
																		email: e
																			.target
																			.value,
																  }
																: p
													),
											})
										}
										className="w-full border rounded p-2 focus:outline-none focus:border-blue-500"
									/>
								</div>
								<button
									type="button"
									onClick={() => removeParticipant(index)}
									className="mt-2 mb-5 w-60 bg-red-500 text-white rounded py-2 hover:bg-red-600 focus:outline-none"
								>
									Remove
								</button>
							</div>
						))}
						{formData.participants.length < 4 && (
							<button
								type="button"
								onClick={addParticipant}
								className=" mb-10 w-60 bg-green-500 text-white rounded py-2 hover:bg-green-600 focus:outline-none"
							>
								Add Participant
							</button>
						)}
						<h1 className="text-red-600">
							* E-FOOTBALL: 200/- (Per team)
						</h1>
						<div className="mb-4 mt-4">
							<Image
								src="/qr_code.jpeg"
								width={200}
								height={200}
							/>
							<h1>
								UPI ID:{" "}
								<span className="text-orange-400">
									8170842884@paytm
								</span>
							</h1>
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
							className="w-full bg-blue-500 text-white rounded py-2 hover:bg-blue-600 focus:outline-none"
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default page;
