"use client";
import { useEffect, useState } from "react";
import AboutSection from "@/components/home/aboutsection";
import Hero from "../components/home/blackhole/Hero";
import PreLoader from "../components/home/preloader";
import { AnimatePresence } from "framer-motion";
import TimerSection from "@/components/home/countdown";
import Gallery from "../components/home/gallery/index";
import EventSection from "@/components/home/eventsection";
import AboutFooter from "@/components/aboutpage/aboutfooter/index";
import Sponsers from "@/components/home/sponsor/Sponsor";
import Footer from "@/components/common/footer/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2000);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <PreLoader />}
      </AnimatePresence>
      <main className="h-auto w-screen">
        <div className="flex flex-col h-full gap-20">
          <Hero />
          <TimerSection />
          <AboutSection />
          <EventSection />
          <Gallery />
          <Sponsers />
          <AboutFooter />
          <Footer />
        </div>
      </main>
    </>
  );
}
