"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import StarsCanvas from "@/components/common/starbackground/StarBackground";

const page = () => {
	const router = useRouter();
	const [formData, setFormData] = useState({
		userName: "",
		password: "",
	});

	const handleForm = async (event) => {
		event.preventDefault();
		try {
			const res = await axios.post("/api/admin/login", formData);
			if (res.data.message === "Done.") {
				toast.success("Login successful!", {
					position: "top-center",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "colored",
				});
				router.push("/admin/dashboard");
			} else {
				throw new Error("Backend Data Fetch failed");
			}
		} catch (error) {
			toast.error("Login failed. Please check your credentials.", {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "colored",
			});
			console.error("Error to Login", error);
		}
	};

	return (
		<div className="h-screen w-screen">
			<StarsCanvas/>
			<div className="flex justify-center items-center">
				<div className="bg-gradient-to-b from-indigo-600 p-8 rounded shadow-md w-96 mt-72 md:mt-52">
					<h1 className="text-4xl font-bold mb-4 text-center">
						Login
					</h1>
					<form onSubmit={handleForm}>
						<div className="mb-4">
							<label className="block text-white">
								Username:
							</label>
							<input
								onChange={(event) => {
									setFormData({
										...formData,
										userName: event.target.value,
									});
								}}
								value={formData.userName}
								required={true}
								type="text"
								className="w-full border text-black bg-white/80 font-roboto text-lg rounded p-2 focus:outline-none focus:border-blue-500"
							/>
						</div>
						<div className="mb-4">
							<label className="block text-white">
								Password:
							</label>
							<input
								onChange={(event) => {
									setFormData({
										...formData,
										password: event.target.value,
									});
								}}
								value={formData.password}
								required={true}
								type="password"
								className="w-full text-black border rounded bg-white/80 font-roboto text-lg p-2 focus:outline-none focus:border-blue-500"
							/>
						</div>
						<button
							type="submit"
							className="w-full bg-gradient-to-b from-indigo-600 text-white font-roboto text-xl rounded py-2 hover:from-indigo-900 focus:outline-none"
						>
							Login
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default page;
