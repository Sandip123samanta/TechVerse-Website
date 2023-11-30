// pages/dashboard.js
"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import EventTable from "./EventTable";

const Dashboard = () => {
	const [registrations, setRegistrations] = useState([]);
	const [registrationCount, setRegistrationCount] = useState(0);

	useEffect(() => {
		// Fetch data from your API endpoint
		const fetchData = async () => {
			try {
				const response = await axios.get("/api/admin");
				setRegistrations(response.data);
				console.log(response.data);
				setRegistrationCount(response.data.length);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};
		fetchData();
	}, []);

	return (
		<div className="container mx-auto p-8">
			<h1 className="text-2xl font-bold mb-4">
				Event Management Dashboard
			</h1>
			<EventTable events={registrations} />
		</div>
	);
};

export default Dashboard;
