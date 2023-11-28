"use client";
import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Contact from "../../eventDetails/Contact";

const Page = () => {
	const router = useRouter();
	const [file, setFile] = useState(null);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		imageUrl: "",
		eventName: "Craftopia",
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
			"The Grand Handcraft Competition Celebrating Artistry, Imagination, and Skill - Unleash Your Creativity and Showcase Your Handmade Masterpieces!",
		headName: "BARNA BARMAN",
		headPhoneNo: "6290423335",
		headEmailId: "barnabarman06@gmail.com",
		coHeadName: "LEESHA SAHA",
		coHeadPhoneNo: "8100211820",
		coHeadEmailId: "leeshasaha13@gmail.com",
	};

	const rules = [
		"1. It si a live contest (mode-offline). Participants wil compete in person, at the campus.Participants should submit their hand craft two days before the event physically.",
		"2. Each participant can submit maximum of two works. Participants must elaborate on their work in front of the judges (3 minutes will be given to each participant to describe). There will be a question-answering session too.",
		"3. Your work must be your original concept and not a copy of anyone else and it should not be the work which you have already presented in the previous year.",
	];

	return (
		<div className="h-screen w-screen md:flex gap-20 md:justify-center md:items-center md:mt-24">
			<Contact
				params={contactDetails}
				rules={rules}
				imgUrl={"/EventPageImg/Super Coder.jpg"}
			/>
			<div className="flex items-center justify-center text-black font-roboto">
				<div className="bg-white p-8 rounded shadow-md w-[30rem]">
					<h1 className="text-3xl font-semibold text-center mb-4">
						Craftopia
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
							* CRAFTOPIA: 50/- (Per head)
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
