import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/common/navbar";
// import Footer from "@/components/common/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StarsCanvas from "@/components/common/starbackground/StarBackground";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "TechVerse2.0",
	description: "",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} bg-[#030014] overflow-x-hidden`}
			>
				<ToastContainer />
				<StarsCanvas/>
				<Header />
				{children}
				{/* <Footer /> */}
			</body>
		</html>
	);
}
