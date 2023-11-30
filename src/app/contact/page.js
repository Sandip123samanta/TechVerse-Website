"use client";
import React, { useState } from "react";
import "./style.scss";
import emailjs from "@emailjs/browser";
import Footer from "@/components/common/footer/Footer";

function Page() {
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
		phone: "",
	});
	const [isLoading, setIsLoading] = useState(false);
	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true);
		emailjs
			.send(
				"service_i5kjowc",
				"template_y6vkzhf",
				{
					from_name: form.name,
					to_name: "TechVerse Team",
					from_email: form.email,
					to_email: "techverse.techfestofficial@gmail.com",
					message: form.message,
					phone: form.phone,
				},
				"w-tGUXyWKIH5K2Mhg"
			)
			.then(() => {
				setIsLoading(false);
				setForm({ name: "", email: "", message: "", phone: "" });
			})
			.catch((error) => {
				setIsLoading(false);
			});
	};

	return (
		<>			<section className="container">
				<section className="contact-container flex lg:flex-row flex-col z-[8] gap-4">
					<div className="lg:w-1/2 w-full flex flex-col gap-3">
						<h3 className="text-white font-young text-2xl">
							Contact Us
						</h3>
						<p className="text-white font-mono">
							Fill up the form and our Team will get back to you
							within 24 hours. Or click the phone number below to
							make a call to{" "}
							<b className="text-red-600">Priyashri Batabyal</b>
							(Student Convenor).
						</p>
						<div className="w-full flex items-center gap-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								width="30"
								height="30"
								viewBox="0 0 48 48"
							>
								<circle
									cx="24"
									cy="24"
									r="20"
									fill="#2979ff"
								></circle>
								<circle
									cx="24"
									cy="19"
									r="4"
									fill="#2962ff"
								></circle>
								<path
									fill="#2962ff"
									d="M24,26c0,0-9,0-9,5.727C15,35,16.636,35,24,35s9,0,9-3.273C33,26,24,26,24,26z"
								></path>
								<circle
									cx="24"
									cy="18"
									r="4"
									fill="#fff"
								></circle>
								<path
									fill="#fff"
									d="M24,25c0,0-9,0-9,5.727C15,34,16.636,34,24,34s9,0,9-3.273C33,25,24,25,24,25z"
								></path>
							</svg>
							<a className="text-white" href="tel:+91 9163096928">
								+91 9163096928
							</a>
						</div>
						<div className="w-full flex gap-3 text-white font-mono decoration-none">
							<a
								href="https://www.facebook.com/profile.php?id=61553361925877&mibextid=ZbWKwL"
								className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
							>
								Facebook
							</a>
							<a className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
								Instagram
							</a>
						</div>
					</div>
					<div className="flex-1 min-w-[50%] flex flex-col">
						<form
							className="w-full flex flex-col gap-7"
							onSubmit={handleSubmit}
						>
							<label className="text-white font-semibold">
								Name
								<input
									type="text"
									name="name"
									className="input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="john"
									required
									value={form.name}
									onChange={handleChange}
								/>
							</label>
							<label className="text-white font-semibold">
								Phone Number
								<input
									type="text"
									name="phone"
									className="input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="+91 7557030058"
									required
									value={form.phone}
									onChange={handleChange}
								/>
							</label>
							<label className="text-white font-semibold">
								Email
								<input
									type="email"
									name="email"
									className="input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="john@gmail.com"
									required
									value={form.email}
									onChange={handleChange}
								/>
							</label>
							<label className="text-white font-semibold">
								Your Message
								<textarea
									name="message"
									className="textarea block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									rows={4}
									placeholder="Let me know how i can help you!"
									required
									value={form.message}
									onChange={handleChange}
								/>
							</label>
							<button
								type="submit"
								class="px-5 py-2.5 text-sm justify-center font-medium text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
								disabled={isLoading}
							>
								<svg
									class="w-3.5 h-3.5 text-white me-2"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 20 16"
								>
									<path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
									<path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
								</svg>
								{isLoading ? "Sending..." : "Send Message"}
							</button>
						</form>
					</div>
				</section>
			</section>
			<Footer/>
		</>
	);
}

export default Page;