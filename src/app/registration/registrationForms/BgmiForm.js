import React from "react";

const BgmiForm = ({ formData, handleChange }) => (
	<>
		<div className="flex justify-center items-center">
			<div className="bg-white p-8 rounded shadow-md w-auto  mt-20 font-young">
				<h1 className="text-black text-2xl font-bold text-center mb-4">
					Battleground Mobile India
				</h1>
				<div className="md:flex md:gap-2">
					<div className="mb-4 bg-orange-400">
						<h1 className="block text-black text-center">
							1st Player
						</h1>
						<label className="block text-black">Name:</label>
						<input
							type="text"
							name="p1name"
							value={formData.p1name}
							onChange={handleChange}
							required={true}
							className="w-full text-black border rounded p-2 focus:outline-none focus:border-blue-500"
						/>
						<label className="block text-black">
							Character Id:
						</label>
						<input
							type="charecterId"
							name="p1n"
							value={formData.p1charecterId}
							onChange={handleChange}
							required={true}
							className="w-full text-black border rounded p-2 focus:outline-none focus:border-blue-500"
						/>
						<label className="block text-black">Email:</label>
						<input
							type="email"
							name="p1email"
							value={formData.p1email}
							onChange={handleChange}
							required={true}
							className="w-full text-black border rounded p-2 focus:outline-none focus:border-blue-500"
						/>
						<label className="block text-black">Phone No:</label>
						<input
							type="phone"
							name="p1phone"
							value={formData.p1phone}
							onChange={handleChange}
							required={true}
							className="w-full text-black border rounded p-2 focus:outline-none focus:border-blue-500"
						/>
					</div>
					<div className="mb-4 bg-green-400">
						<h1 className="block text-black text-center">
							2nd Player
						</h1>
						<label className="block text-black">Name:</label>
						<input
							type="text"
							name="p2name"
							value={formData.p2name}
							onChange={handleChange}
							required={true}
							className="w-full text-black border rounded p-2 focus:outline-none focus:border-blue-500"
						/>
						<label className="block text-black">
							Character Id:
						</label>
						<input
							type="charecterId"
							name="p2n"
							value={formData.p2charecterId}
							onChange={handleChange}
							required={true}
							className="w-full text-black border rounded p-2 focus:outline-none focus:border-blue-500"
						/>
						<label className="block text-black">Email:</label>
						<input
							type="email"
							name="p2email"
							value={formData.p2email}
							onChange={handleChange}
							required={true}
							className="w-full text-black border rounded p-2 focus:outline-none focus:border-blue-500"
						/>
						<label className="block text-black">Phone No:</label>
						<input
							type="phone"
							name="p2phone"
							value={formData.p2phone}
							onChange={handleChange}
							required={true}
							className="w-full text-black border rounded p-2 focus:outline-none focus:border-blue-500"
						/>
					</div>
					<div className="mb-4 bg-blue-400">
						<h1 className="block text-black text-center">
							2nd Player
						</h1>
						<label className="block text-black">Name:</label>
						<input
							type="text"
							name="p3name"
							value={formData.p3name}
							onChange={handleChange}
							required={true}
							className="w-full text-black border rounded p-2 focus:outline-none focus:border-blue-500"
						/>
						<label className="block text-black">
							Character Id:
						</label>
						<input
							type="charecterId"
							name="p3n"
							value={formData.p3charecterId}
							onChange={handleChange}
							required={true}
							className="w-full text-black border rounded p-2 focus:outline-none focus:border-blue-500"
						/>
						<label className="block text-black">Email:</label>
						<input
							type="email"
							name="p3email"
							value={formData.p3email}
							onChange={handleChange}
							required={true}
							className="w-full text-black border rounded p-2 focus:outline-none focus:border-blue-500"
						/>
						<label className="block text-black">Phone No:</label>
						<input
							type="phone"
							name="p3phone"
							value={formData.p3phone}
							onChange={handleChange}
							required={true}
							className="w-full text-black border rounded p-2 focus:outline-none focus:border-blue-500"
						/>
					</div>
					<div className="mb-4 bg-yellow-400">
						<h1 className="block text-black text-center">
							4th Player
						</h1>
						<label className="block text-black">Name:</label>
						<input
							type="text"
							name="p4name"
							value={formData.p4name}
							onChange={handleChange}
							required={true}
							className="w-full text-black border rounded p-2 focus:outline-none focus:border-blue-500"
						/>
						<label className="block text-black">
							Character Id:
						</label>
						<input
							type="charecterId"
							name="p4n"
							value={formData.p4charecterId}
							onChange={handleChange}
							required={true}
							className="w-full text-black border rounded p-2 focus:outline-none focus:border-blue-500"
						/>
						<label className="block text-black">Email:</label>
						<input
							type="email"
							name="p4email"
							value={formData.p4email}
							onChange={handleChange}
							required={true}
							className="w-full text-black border rounded p-2 focus:outline-none focus:border-blue-500"
						/>
						<label className="block text-black">Phone No:</label>
						<input
							type="phone"
							name="p4phone"
							value={formData.p4phone}
							onChange={handleChange}
							required={true}
							className="w-full text-black border rounded p-2 focus:outline-none focus:border-blue-500"
						/>
					</div>
					<div className="mb-4 bg-lime-400">
						<h1 className="block text-black text-center">
							5th Player(Optional)
						</h1>
						<label className="block text-black">Name:</label>
						<input
							type="text"
							name="p5name"
							value={formData.p5name}
							onChange={handleChange}
							className="w-full text-black border rounded p-2 focus:outline-none focus:border-blue-500"
						/>
						<label className="block text-black">
							Character Id:
						</label>
						<input
							type="charecterId"
							name="p5n"
							value={formData.p5charecterId}
							onChange={handleChange}
							className="w-full text-black border rounded p-2 focus:outline-none focus:border-blue-500"
						/>
						<label className="block text-black">Email:</label>
						<input
							type="email"
							name="p5email"
							value={formData.p5email}
							onChange={handleChange}
							className="w-full text-black border rounded p-2 focus:outline-none focus:border-blue-500"
						/>
						<label className="block text-black">Phone No:</label>
						<input
							type="phone"
							name="p5phone"
							value={formData.p5phone}
							onChange={handleChange}
							className="w-full text-black border rounded p-2 focus:outline-none focus:border-blue-500"
						/>
					</div>
				</div>
			</div>
		</div>
	</>
);

export default BgmiForm;
