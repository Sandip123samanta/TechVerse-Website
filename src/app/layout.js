import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/common/navbar";
// import Footer from "@/components/common/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
				<Header />
				{children}
				{/* <Footer /> */}
			</body>
		</html>
	);
}
