"use client";
import React, { useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import axios from "axios";
// import StarsCanvas from "@/components/common/starbackground/StarBackground";
import Contact from "../../eventDetails/Contact";

const Page = () => {
	const router = useRouter();
	const [file, setFile] = useState(null);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		imageUrl: "",
		eventName: "Tech Trivia",
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
			"Are you the Tech-nerd of your group? Do people mock you for your knowledge on tech stuff? Grab this opportunity to put your knowledge to the test, ace thisTech Quiz and gain admirers!",
		headName: "SOUMYAJIT NANDI",
		headPhoneNo: "9330247572",
		headEmailId: "soumyajitnandi123@gmail.com",
		coHeadName: "SOHAM BHATTACHERJEE",
		coHeadPhoneNo: "9641962509",
		coHeadEmailId: "sohambhattaacherjer@gmail.com",
	};

	const rules = [
		{
			title: "GROUPING DETAILS:-",
			description:
				"Registration could be done on the website as well as on the offline registration desk. [1-3] member Team should be pre-formed by the participants with a suitable team name or can be formed on spot by the coordinators.Tech quiz will comprise of Two Rounds:The Qualifier Round and The Final Round",
		},
		{
			title: "QUALIFIER ROUND:-",
			description:
				"In this round, there will be 20 questions and 1 minute wil be allotted for each question, depending for the finals.Participants will be provided a paper and would have to write answers on it.Participants must write their team name and team leader name and a valid phone number on top of the paper.",
		},
		{
			title: "FINAL ROUND:-",
			description:
				"Finalists would face questions on the above-mentioned domains and rules of the final round will be provied on-spot.Based on the performance Winner team and 1st Runner-up team wil be decided and attractive prizes would be provided.",
		},
		"* Participants from schools /colleges are requested to bring their institutional id cards.",
	];

	return (
		<div className="h-screen w-screen md:h-auto md:flex gap-20 justify-center items-center md:mt-24">
			{/* <StarsCanvas /> */}
			<Contact
				params={contactDetails}
				rules={rules}
				imgUrl={"/EventPageImg/Tech Trivia.jpeg"}
			/>
			<div className="flex items-center justify-center text-black font-roboto">
				<div className="bg-white p-8 rounded shadow-md w-[30rem]">
					<h1 className="text-3xl font-semibold text-center mb-4">
						Tech Trivia
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
						{formData.participants.length < 3 && (
							<button
								type="button"
								onClick={addParticipant}
								className=" mb-10 w-60 bg-green-500 text-white rounded py-2 hover:bg-green-600 focus:outline-none"
							>
								Add Participant
							</button>
						)}
						<h1 className="text-red-600">
							* TECH TRIVIA: 100/-(Maximum participants- 4)
						</h1>
						<div className="mb-4 mt-4">
							<Image
								src="/qr_code.jpeg"
								width={200}
								height={200}
								alt="qrcode"
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

export default Page;
