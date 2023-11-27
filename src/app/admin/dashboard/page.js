"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import * as XLSX from "xlsx";
import StarsCanvas from "@/components/common/starbackground/StarBackground";

const Dashboard = () => {
	const [registrations, setRegistrations] = useState([]);
	const [registrationCount, setRegistrationCount] = useState(0);

	useEffect(() => {
		// Fetch data from your API endpoint
		const fetchData = async () => {
			try {
				const response = await axios.get("/api/admin");
				setRegistrations(response.data);
				setRegistrationCount(response.data.length);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};
		// Check if window is defined (client-side) before calling fetchData
		if (typeof window !== "undefined") {
			fetchData();
		}
	}, []);

	// Function to group registrations by eventName
	const groupRegistrationsByEvent = () => {
		const groupedRegistrations = {};

		registrations.forEach((registration) => {
			const eventName = registration.eventName;

			if (!groupedRegistrations[eventName]) {
				groupedRegistrations[eventName] = [];
			}

			groupedRegistrations[eventName].push(registration);
		});

		return groupedRegistrations;
	};

	// Function to assign a color to each unique eventName
	const getColorForEvent = (eventName) => {
		const colorMap = {
			"8 Ball Pool": "bg-blue-200",
			"Bgmi": "bg-yellow-200",
			"Bishop's Battle": "bg-lime-200",
			"Craftopia": "bg-purple-200",
			"E-Football": "bg-cyan-200",
			"Freeze The Frames": "bg-orange-200",
			"Idea Scape": "bg-green-200",
			/////////////////////////////
			"Model Display": "bg-blue-200",
			"Poster Exhibition": "bg-yellow-200",
			"Robo Rampage": "bg-lime-200",
			"Code Golf": "bg-purple-200",
			"Tech Trivia": "bg-cyan-200",
			"Treasure Hunt": "bg-green-200",
			"Web Development": "bg-orange-200",
		};

		return colorMap[eventName] || "bg-gray-200";
	};

	const downloadExcel = (eventName, eventRegistrations) => {
		const data = eventRegistrations.map((registration) => {
		  const participantsData = registration.participants.map(
			(participant) => `Name: ${participant.name}, Email: (${participant.email})`
		  );
	  
		  return {
			Name: registration.name,
			Email: registration.email,
			Phone: registration.phone,
			Participants: participantsData.join(", "),
			"Payment SS": registration.imageUrl,
		  };
		});
	  
		const ws = XLSX.utils.json_to_sheet(data);
		const wb = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(wb, ws, "Registrations");
		const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
		const dataBlob = new Blob([excelBuffer], {
		  type: "application/octet-stream",
		});
	  
		const fileName = `${eventName}_Registrations.xlsx`;
		const downloadLink = document.createElement("a");
		downloadLink.href = URL.createObjectURL(dataBlob);
		downloadLink.download = fileName;
		downloadLink.click();
	  };
	  

	return (
		<div className="container h-screen w-screen font-roboto text-white">
			<StarsCanvas/>
			<h1 className="text-white mt-20 flex justify-center items-center text-4xl md:text-6xl font-extrabold font-roboto mb-4">
				Admin Dashboard
			</h1>
			<h1 className="text-xl mb-8">
				Total Registrations: {registrationCount}
			</h1>

			{Object.entries(groupRegistrationsByEvent()).map(
				([eventName, eventRegistrations]) => (
					<div key={eventName} className="mb-8">
						<h2 className="text-3xl font-extrabold mb-4 underline underline-offset-8">
							{eventName}
						</h2>
						<div className="mb-4">
							<button
								className="bg-gradient-to-r from-indigo-500 hover:to-indigo-500 text-white font-bold rounded"
								onClick={() =>
									downloadExcel(eventName, eventRegistrations)
								}
							>
								Download Excel for {eventName}
							</button>
						</div>
						<div className="overflow-x-auto md:overflow-x-visible">
							<table className="w-screen bg-white border border-gray-300">
								<thead className="text-black">
									<tr>
										<th className="py-2 px-4 border-black border-2">
											Name
										</th>
										<th className="py-2 px-4 border-black border-2">
											Email
										</th>
										<th className="py-2 px-4 border-black border-2">
											Phone
										</th>
										<th className="py-2 px-4 border-black border-2">
											Participants
										</th>
										<th className="py-2 px-4 border-black border-2">
											Payment SS
										</th>
									</tr>
								</thead>
								<tbody className="text-black">
									{eventRegistrations.map((registration) => (
										<tr
											key={registration._id}
											className={`${getColorForEvent(
												eventName
											)}`}
										>
											<td className="py-2 px-4 border-b border-black border-2 text-center">
												{registration.name}
											</td>
											<td className="py-2 px-4 border-b border-black border-2 text-center">
												{registration.email}
											</td>
											<td className="py-2 px-4 border-b border-black border-2 text-center">
												{registration.phone}
											</td>
											<td className="py-2 px-4 border-b border-black border-2 text-center">
												{registration.participants
													.length !== 0 ? (
													<table className="min-w-full">
														<thead>
															<tr>
																<th>Name</th>
																<th>Email</th>
															</tr>
														</thead>
														<tbody>
															{registration.participants.map(
																(
																	participant,
																	index
																) => (
																	<tr
																		key={
																			index
																		}
																	>
																		<td className="py-2 px-4 border-b border-black border-2">
																			{
																				participant.name
																			}
																		</td>
																		<td className="py-2 px-4 border-b border-black border-2">
																			{
																				participant.email
																			}
																		</td>
																	</tr>
																)
															)}
														</tbody>
													</table>
												) : (
													<span>No Participants</span>
												)}
											</td>
											<td className="py-2 px-4 border-b border-black border-2 text-center">
												<Link
													href={registration.imageUrl}
												>
													<h1 className="bg-gradient-to-r from-indigo-500 rounded-lg">
														Click
													</h1>
												</Link>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				)
			)}
		</div>
	);
};

export default Dashboard;
