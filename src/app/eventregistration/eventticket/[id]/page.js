"use client";
import React, { useRef, useEffect, useState } from "react";
import html2canvas from "html2canvas";
import axios from "axios";
// import StarsCanvas from "@/components/common/starbackground/StarBackground";

const EventTicket = ({ params }) => {
	const [data, setData] = useState();
	const cardRef = useRef();
	useEffect(() => {
		const id = params.id;
		async function getData() {
			try {
				const response = await axios.get(`/api/getdata/${id}`);
				const userData = await response.data.data;
				if (userData.date) {
					userData.date = new Date(userData.date);
				}
				setData(userData);
				console.log(userData);
			} catch (error) {
				console.error("Error fetching user data:", error);
			}
		}
		getData();
	}, [params.id]);
	const downloadImage = () => {
		if (cardRef.current) {
			html2canvas(cardRef.current, { scale: 20 }).then((canvas) => {
				const link = document.createElement("a");
				link.href = canvas.toDataURL("image/jpeg");
				link.download = "event_ticket.jpeg";
				link.click();
			});
		}
	};

	return (
		<div className=" h-screen w-screen flex justify-center items-center">
			{/* <StarsCanvas/> */}
			<div>
				<div
					ref={cardRef}
					className="w-[700px] h-[250px] bg-[#E0F4FF] rounded-2xl overflow-hidden shadow-md flex"
				>
					<div className="w-20 h-[100%] bg-black text-white">
						<h1 className="w-max text-2xl font-extrabold -rotate-90 -ml-[3.8rem] mt-28 font-young">
							TECHVERSE 2.0
						</h1>
					</div>

					<div className="p-4 w-[98%]">
						<div className="mb-4 mt-2 flex justify-between items-center">
							<h1 className="text-3xl font-bold font-roboto text-[#272829]">
								{data?.eventName}
							</h1>
							<p className="text-sm text-black text-right mr-5">
								<span className="font-semibold">
									ID: {data?._id}
								</span>
							</p>
						</div>
						<div className="mb-4 mt-4">
							<p className="text-sm text-black mb-2">
								<span className="font-semibold">
									Name: {data?.name}
								</span>
							</p>
							<p className="text-sm text-black mb-2">
								<span className="font-semibold">
									Email: {data?.email}
								</span>
							</p>
							<p className="text-sm text-black mb-2">
								<span className="font-semibold">
									Phone No: {data?.phone}
								</span>
							</p>
						</div>
						<div className="text-sm text-black">
							<span>
								Date: {data?.date?.toLocaleDateString()}
							</span>
						</div>
					</div>
				</div>
				<div className="p-4 text-center">
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
						onClick={downloadImage}
					>
						Download Ticket
					</button>
				</div>
			</div>
		</div>
	);
};

export default EventTicket;
