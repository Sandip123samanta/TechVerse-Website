import './globals.css';
import Header from '../components/common/navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomCursor from '@/components/common/customCursor/CustomCursor';
import SmoothScroll from '@/components/utils/SmoothScroll';
import MobileBackground from '@/components/common/MobileBackground/index';

export const metadata = {
  title: 'TechVerse2.0',
  description: 'Unlesh The TechVerse.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-[#030014] overflow-x-hidden`}>
        <SmoothScroll />
        <CustomCursor />
        <ToastContainer />
        {/* <StarsCanvas /> */}
        <MobileBackground />
        <Header />
        {children}
      </body>
    </html>
  );
}
