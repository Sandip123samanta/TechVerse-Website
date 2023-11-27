import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Contact = ({ params, rules,imgUrl }) => {
	const sliderSettings = {
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 4000,
	};
	return (
		<div className="mb-5 md:mb-0 mt-24 md:mt-0 p-2 md:p-0 text-white">
			<section className="relative border border-white p-4 shadow-2xl mb-5 rounded-lg">
				<div className="absolute inset-0 bg-blur rounded-lg"></div>
				<div className="relative md:w-[35rem] font-roboto">
					<h1 className="text-center text-3xl font-roboto font-bold underline underline-offset-4">
						Event Details
					</h1>
					<div className="md:flex gap-4 mt-5 flex flex-col items-center">
						<Image
							src={imgUrl}
							width={200}
							height={200}
							className="rounded-md border border-white"
							alt="Event Image"
						/>
						<h1 className="text-center md:text-left flex justify-center items-center">
							{params.details}
						</h1>
					</div>
				</div>
			</section>
			<section className="relative border border-white p-4 shadow-2xl rounded-lg mb-5">
				<div className="absolute inset-0 bg-blur rounded-lg"></div>
				<div className="relative md:w-[35rem] font-roboto">
					<h1 className="text-center text-3xl font-roboto font-bold underline underline-offset-8">
						Rules and Regulations
					</h1>
					<Slider {...sliderSettings}>
						{rules?.map((rule, index) => (
							<div key={index}>
								{rule.title ? (
									<div className="mt-4 p-4">
										<h1 className="text-xl font-roboto font-bold mb-4 text-red-500">
											{rule.title}
										</h1>
										<h1 className="text-base font-roboto font-normal">
											{rule.description}
										</h1>
									</div>
								) : (
									<div className="mt-4 p-4">
										<h1 className="text-base font-roboto font-normal">
											{rule}
										</h1>
									</div>
								)}
							</div>
						))}
					</Slider>
				</div>
			</section>
			<section className="relative border border-white p-4 shadow-2xl mb-5 rounded-lg">
				<div className="absolute inset-0 bg-blur rounded-lg"></div>
				<div className="relative md:w-[35rem] font-roboto">
					<h1 className="text-center text-3xl font-roboto font-bold underline underline-offset-4">
						FOR ANY QUERIES CONTACT
					</h1>
					<section className="md:flex justify-around mt-4 p-4">
						<div>
							<h1 className="text-xl font-bold mb-4">
								{params.headName}
							</h1>
							<div className="flex gap-2">
								<Image
									src="/phone.png"
									width={25}
									height={20}
								/>
								<h1 className="font-light">
									{params.headPhoneNo}
								</h1>
							</div>
							<div className="flex gap-2">
								<Image
									src="/gmail.png"
									width={25}
									height={20}
								/>
								<h1 className="font-light">
									{params.headEmailId}
								</h1>
							</div>
						</div>
						<div>
							<h1 className="text-xl font-bold mb-4">
								{params.coHeadName}
							</h1>
							<div className="flex gap-2">
								<Image
									src="/phone.png"
									width={25}
									height={20}
								/>
								<h1 className="font-light">
									{params.coHeadPhoneNo}
								</h1>
							</div>
							<div className="flex gap-2">
								<Image
									src="/gmail.png"
									width={25}
									height={20}
								/>
								<h1 className="font-light">
									{params.coHeadEmailId}
								</h1>
							</div>
						</div>
					</section>
				</div>
			</section>
		</div>
	);
};

export default Contact;
