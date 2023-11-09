"use client";
import { useEffect, useState } from "react";

export default function CountDown() {
	const [endTime, setEndTime] = useState(false);
	useEffect(() => {
		const targetDate = new Date("2023-11-10T00:00:00"); // Replace with your desired date and time
		const countToDate = targetDate.getTime();
		let previousTimeBetweenDates;

		setInterval(() => {
			const currentDate = new Date();
			const timeBetweenDates = Math.ceil(
				(countToDate - currentDate) / 1000
			);
			if (timeBetweenDates <= 0) {
				clearInterval();
				setEndTime(true);
				return;
			}
			flipAllCards(timeBetweenDates);
			previousTimeBetweenDates = timeBetweenDates;
		}, 250);

		function flipAllCards(time) {
			const days = Math.floor(time / 86400); // seconds in a day: 24 * 60 * 60 = 86400
			const seconds = time % 60;
			const minutes = Math.floor(time / 60) % 60;
			const hours = Math.floor(time / 3600);

			flip(
				document.querySelector("[data-days-tens]"),
				Math.floor(days / 10)
			);
			flip(document.querySelector("[data-days-ones]"), days % 10);
			flip(
				document.querySelector("[data-hours-tens]"),
				Math.floor(hours / 10)
			);
			flip(document.querySelector("[data-hours-ones]"), hours % 10);
			flip(
				document.querySelector("[data-minutes-tens]"),
				Math.floor(minutes / 10)
			);
			flip(document.querySelector("[data-minutes-ones]"), minutes % 10);
			flip(
				document.querySelector("[data-seconds-tens]"),
				Math.floor(seconds / 10)
			);
			flip(document.querySelector("[data-seconds-ones]"), seconds % 10);
		}

		function flip(flipCard, newNumber) {
			const topHalf = flipCard.querySelector(".top");
			const startNumber = parseInt(topHalf.textContent);
			if (newNumber === startNumber) return;

			const bottomHalf = flipCard.querySelector(".bottom");
			const topFlip = document.createElement("div");
			topFlip.classList.add("top-flip");
			const bottomFlip = document.createElement("div");
			bottomFlip.classList.add("bottom-flip");

			top.textContent = startNumber;
			bottomHalf.textContent = startNumber;
			topFlip.textContent = startNumber;
			bottomFlip.textContent = newNumber;

			topFlip.addEventListener("animationstart", (e) => {
				topHalf.textContent = newNumber;
			});
			topFlip.addEventListener("animationend", (e) => {
				topFlip.remove();
			});
			bottomFlip.addEventListener("animationend", (e) => {
				bottomHalf.textContent = newNumber;
				bottomFlip.remove();
			});
			flipCard.append(topFlip, bottomFlip);
		}
	}, []);
	return (
		<>
			<div className="h-screen w-screen flex justify-center items-center font-young text-6xl md:text-8xl">
				<div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
					<div className="container-segment">
						<div className="segment-title bg-gradient bg-white text-black rounded-full flex justify-center items-center w-36 text-xs md:text-3xl md:w-56">
							Days
						</div>
						<div className="segment">
							<div
								className="flip-card text-black"
								data-days-tens
							>
								<div className="top bg-gradient-up">2</div>
								<div className="bottom bg-gradient-down">2</div>
							</div>
							<div
								className="flip-card text-black"
								data-days-ones
							>
								<div className="top bg-gradient-up">4</div>
								<div className="bottom bg-gradient-down">4</div>
							</div>
						</div>
					</div>
					<div className="container-segment">
						<div className="segment-title bg-gradient bg-white text-black rounded-full w-36 flex justify-center items-center text-xs md:text-3xl md:w-60">
							Hours
						</div>
						<div className="segment">
							<div
								className="flip-card text-black"
								data-hours-tens
							>
								<div className="top bg-gradient-up">2</div>
								<div className="bottom bg-gradient-down">2</div>
							</div>
							<div
								className="flip-card text-black"
								data-hours-ones
							>
								<div className="top bg-gradient-up">4</div>
								<div className="bottom bg-gradient-down">4</div>
							</div>
						</div>
					</div>
					<div className="container-segment">
						<div className="segment-title bg-gradient bg-white text-black rounded-full w-36 flex justify-center items-center text-xs md:text-3xl md:w-60">
							Minutes
						</div>
						<div className="segment">
							<div
								className="flip-card text-black"
								data-minutes-tens
							>
								<div className="top bg-gradient-up">0</div>
								<div className="bottom bg-gradient-down">0</div>
							</div>
							<div
								className="flip-card text-black"
								data-minutes-ones
							>
								<div className="top bg-gradient-up">0</div>
								<div className="bottom bg-gradient-down">0</div>
							</div>
						</div>
					</div>
					<div className="container-segment">
						<div className="segment-title bg-gradient bg-white text-black rounded-full w-36 flex justify-center items-center text-xs md:text-3xl md:w-60">
							Seconds
						</div>
						<div className="segment">
							<div
								className="flip-card text-black"
								data-seconds-tens
							>
								<div className="top bg-gradient-up">0</div>
								<div className="bottom bg-gradient-down">0</div>
							</div>
							<div
								className="flip-card text-black"
								data-seconds-ones
							>
								<div className="top bg-gradient-up">0</div>
								<div className="bottom bg-gradient-down">0</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
