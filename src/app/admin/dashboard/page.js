"use client";
// pages/index.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [responseData, setResponseData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true)
				const response = await axios.get("/api/admin");
				console.log(response); // Define your API route
				setResponseData(response.data);
				setIsLoading(false)
			} catch (error) {
				setIsLoading(false)
				console.error("Error fetching data:", error.message);
			}
		};
		console.log("in Fetch Data..");
		fetchData();
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
