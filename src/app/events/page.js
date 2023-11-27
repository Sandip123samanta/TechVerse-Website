import React from "react";
import EventCard from "@/app/events/eventcard/EventCard";
import Link from "next/link";
import StarsCanvas from "@/components/starbackground/StarBackground";

const page = () => {
	return (
		<div className="h-auto w-screen">
			<StarsCanvas/>
			<div className="flex justify-center items-center mt-28">
				<h1 className="text-3xl font-roboto font-bold md:text-9xl">EVENTS</h1>
			</div>
			<div className="md:grid md:grid-cols-4 md:mt-16 md:ml-16 gap-6 flex flex-col justify-center items-center mt-20 mb-10">
				<Link href={"/eventregistration/registration/8ballpool"}>
					<EventCard
						imgUrl={"/EventPageImg/8ballpool.jpg"}
						eventName={"8 BALL POOL"}
						details={"Dive into the virtual realm of cues, balls, and pockets, and discover why millions of players choose 8 Ball Pool for endless fun and competitive challenges."}
					/>
				</Link>
				<Link href={"/eventregistration/registration/bgmi"}>
					<EventCard
						imgUrl={"/EventPageImg/Bgmi.jpeg"}
						eventName={"BGMI"}
						details={"The ultimate mobile battleground awaits, where players unite, strategize, and engage in epic battles for victory. Join now!"}
					/>
				</Link>
				<Link href={"/eventregistration/registration/bishopbattle"}>
					<EventCard
						imgUrl={"/EventPageImg/Chess.jpeg"}
						eventName={"BISHOP BATTLE"}
						details={"Welcome to the world of chess, a timeless gamewhere strategy, foresight, and skill converge on the 64 squares."}
					/>
				</Link>
				<Link href={"/eventregistration/registration/craftopia"}>
					<EventCard
						imgUrl={"/EventPageImg/craftopia.jpg"}
						eventName={"CRAFTOPIA"}
						details={"The Grand Handcraft Competition Celebrating Artistry, Imagination, and Skill - Unleash Your Creativity and Showcase Your Handmade Masterpieces!"}
					/>
				</Link>
				<Link href={"/eventregistration/registration/efootball"}>
					<EventCard
						imgUrl={"/EventPageImg/E football.jpeg"}
						eventName={"E-FOOTBALL"}
						details={"Merging the pitch and pixel, this game redefines soccer gaming with realism, community, and esports thrill. Presenting E-FOOTBALL!"}
					/>
				</Link>
				<Link href={"/eventregistration/registration/freezetheframe"}>
					<EventCard
						imgUrl={"/EventPageImg/Freeze the frame.jpg"}
						eventName={"FREEZZE THE FRAME"}
						details={"Get your lenses, cameras and phones out to capture and enhance what we see every day.Thy lens shall be our eyes!"}
					/>
				</Link>
				<Link href={"/eventregistration/registration/ideascape"}>
					<EventCard
						imgUrl={"/EventPageImg/ideascape.jpeg"}
						eventName={"IDEASCAPE"}
						details={"Fostering Innovation and Empowering Change: A Comprehensive Guide to Effective Idea Presentation for a Transformative Tomorrow."}
					/>
				</Link>
				<Link href={"/eventregistration/registration/modeldisplay"}>
					<EventCard
						imgUrl={"/EventPageImg/model display.jpg"}
						eventName={"MODEL DISPLAY"}
						details={"Work on some real-time, innovative, model project ideas, and hang in there until you make the cut. When you display your own model, it'll be like earning a Merit Badge for your efforts!"}
					/>
				</Link>
				<Link href={"/eventregistration/registration/posterexhibition"}>
					<EventCard
						imgUrl={"/EventPageImg/Poster Exibhision.jpg"}
						eventName={"POSTER EXHIBITION"}
						details={"Let your mind wander, yet make a statement. Illustrate your thoughts, caption your voice, embolden your words - and there, you've made a poster.Express yourself, and display it."}
					/>
				</Link>
				<Link href={"/eventregistration/registration/roborampage"}>
					<EventCard
						imgUrl={"/EventPageImg/Robo Rampage.jpg"}
						eventName={"ROBO RAMPAGE"}
						details={"The ultimate mobile battleground awaits, where players unite, strategize, and engage in epic battles for victory. Join now!"}
					/>
				</Link>
				<Link href={"/eventregistration/registration/codegolf"}>
					<EventCard
						imgUrl={"/EventPageImg/Super Coder.jpg"}
						eventName={"CODE GOLF"}
						details={"How well is your Code Efficiency in terms of Code Shortening and Modifying? If juggling with varying code redundancy, length and dimension si your thing, then buddy,pick acode, trim it down!"}
					/>
				</Link>
				<Link href={"/eventregistration/registration/techtrivia"}>
					<EventCard
						imgUrl={"/EventPageImg/Tech Trivia.jpeg"}
						eventName={"TECH TRIVIA"}
						details={"Are you the Tech-nerd of your group? Do people mock you for your knowledge on tech stuff? Grab this opportunity to put your knowledge to the test, ace thisTech Quiz and gain admirers!"}
					/>
				</Link>
				<Link href={"/eventregistration/registration/treasurehunt"}>
					<EventCard
						imgUrl={"/EventPageImg/treasure hunt.jpg"}
						eventName={"TREASURE HUNT"}
						details={"Welcome, adventurers! Embark on a thrilling journey, solve clues, and unveil secrets in our exciting treasure hunt. Let's begin the quest!"}
					/>
				</Link>
				<Link href={"/eventregistration/registration/webdevelopment"}>
					<EventCard
						imgUrl={"/EventPageImg/web development.jpeg"}
						eventName={"WEB DEVELOPMENT"}
						details={"Showcase your creative talent of website development. Explore your ability to build excellent websites and impress everyone with your developing skills."}
					/>
				</Link>
			</div>
		</div>
	);
};

export default page;
