"use client";
// pages/index.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [responseData, setResponseData] = useState([]);

	useEffect(() => {
		console.log("Component mounted");
		const fetchData = async () => {
			try {
				console.log("Fetching data...");
				const response = await axios.get("/api/admin");
				console.log(response);
				setResponseData(response.data);
				console.log("Data fetched successfully");
				setIsLoading(false)
			} catch (error) {
				setIsLoading(false)
				console.error("Error fetching data:", error.message);
			}
		};
	
		fetchData();
	
		return () => {
			console.log("Component will unmount");
			// Cleanup function (cancel ongoing requests, reset state, etc.)
		};
	}, []);
	

	return (
		<div className="mt-96 text-xl text-white">
			<h1>Data Dashboard</h1>
			{isLoading ? (
				<h1 className=" text-3xl font-serif mt-48">Loading...</h1>
			) : (
				<div className=" w-5/6 md:flex flex-col gap-3">
					{responseData.map((item) => (
						<h1 key={item._id}>{item.name}</h1>
					))}
				</div>
			)}
		</div>
	);
};

export default Home;
