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
		eventName: "Freeze The Frames",
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
			setIsLoading(true);
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
			"Get your lenses, cameras and phones out to capture and enhance what we see every day.Thy lens shall be our eyes!",
		headName: "SOUVIK DINDA",
		headPhoneNo: "7439350958",
		headEmailId: "souvikdinda29@gmail.com",
		coHeadName: "JOYITA DOLUI",
		coHeadPhoneNo: "8509977604",
		coHeadEmailId: "doluijoyita@gmail.com",
	};

	const rules = [
		"1. Submissions will not be accepted once the deadline lapses.Images should be no larger than 15MB. Photos must be in JPEG format.",
		"2. Photos with watermarks are not eligible. Multiple entries are accepted from one participant. For each entry new registration is needed.",
		"3. Entries will be disqualified if the entry does not follow the theme. Registration money will not be refunded in that case.Entries should be named after the participants' names.",
		"4. Mail your entry to event head's mail id Submit hard copy (printed in 5x7'' photo paper) before two days of the event.",
	];

	return (
		<div className="h-screen w-screen md:flex gap-20 justify-center items-center md:mt-32">
			<Contact
				params={contactDetails}
				rules={rules}
				imgUrl={"/EventPageImg/Freeze the frame.jpg"}
			/>
			<div className="flex items-center justify-center text-black font-roboto">
				<div className="bg-white p-8 rounded shadow-md w-[25rem]">
					<h1 className="text-3xl font-semibold text-center mb-4">
						Freeze The Frames
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
							* FREEZE THE FRAMES: 50/- (Per head)
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
