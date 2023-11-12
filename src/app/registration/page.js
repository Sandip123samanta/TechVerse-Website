"use client";
import { useState } from "react";
import Image from "next/image";
import BgmiForm from "./registrationForms/BgmiForm";
import WebDevForm from "./registrationForms/WebDevForm";
import ModelDisplay from "./registrationForms/ModelDisplay";

const EventRegistrationForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
        eventName:""
	});

	const [selectedEvent, setSelectedEvent] = useState("");

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleEventChange = (e) => {
		setSelectedEvent(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			console.log(formData);
		} catch (error) {
			console.error("Error submitting form:", error.message);
		}
	};

	return (
		<div className="md:flex h-screen w-screen justify-center items-center">
			<div className="bg-white p-8 rounded shadow-md w-96 font-young">
				<h1 className="text-black text-2xl font-bold text-center mb-4">
					Event Registration Form
				</h1>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label className="block text-black">Email:</label>
						<input
							type="email"
							id="task_content"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required={true}
							className="w-full text-black border rounded p-2 focus:outline-none focus:border-blue-500"
						/>
					</div>
					<div className="mb-4">
						<label className="block text-black">Name:</label>
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
							required={true}
							className="w-full text-black border rounded p-2 focus:outline-none focus:border-blue-500"
						/>
					</div>
					<div className="mb-4">
						<label className="block text-black">Phone No:</label>
						<input
							type="tel"
							name="phone"
							value={formData.phone}
							onChange={handleChange}
							required={true}
							className="w-full text-black border rounded p-2 focus:outline-none focus:border-blue-500"
						/>
					</div>
					<div className="mb-4">
						<label className="block text-black">Events:</label>
						<select
							name="event"
							value={selectedEvent}
							onChange={handleEventChange}
							className="w-full h-12 text-black border-2 flex flex-col"
						>
							<option value="" disabled>
								...Select Your Event...
							</option>
							<option value="modeldisplay">Model Display</option>
							<option value="posterexbibition">
								Poster Exhibition
							</option>
							<option value="ideascape">Idea Scape</option>
							<option value="treasurehunt">Treasure Hunt</option>
							<option value="bgmi">BGMI</option>
							<option value="efootball">E-Football</option>
							<option value="roborampage">Robo Rampage</option>
							//////////////////////////
							<option value="supercoder">Super Coder</option>
							<option value="webdev">Web Builders</option>
							<option value="techTrivia">Tech Trivia</option>
							<option value="freeztheframe">
								Freeze The Frames
							</option>
							<option value="8ballpool">8 Ball Pool</option>
							<option value="craftopia">Craftopia</option>
							<option value="bishopbattle">
								Bishop's Battle
							</option>
						</select>
					</div>
					<Image
						src="/qr_code.jpeg"
						width={200}
						height={200}
						className=""
					/>
					<button
						type="submit"
						className="w-full bg-blue-500 text-white font-semibold rounded py-2 hover:bg-blue-600 focus:outline-none"
					>
						Submit
					</button>
				</form>
			</div>
			<div>
				{selectedEvent === "modeldisplay" && (
					<ModelDisplay
						formData={formData}
						handleChange={handleChange}
					/>
				)}
				{selectedEvent === "webdev" && (
					<WebDevForm
						formData={formData}
						handleChange={handleChange}
					/>
				)}
				{selectedEvent === "bgmi" && (
					<BgmiForm formData={formData} handleChange={handleChange} />
				)}
			</div>
		</div>
	);
};

export default EventRegistrationForm;
