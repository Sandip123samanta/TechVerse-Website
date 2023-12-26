"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

const Sponsor = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <div className="w-screen flex flex-col justify-center items-center gap-[5vw]">
      <h1 className="text-4xl md:text-7xl font-roboto font-extrabold text-white">
        OUR SPONSORS
      </h1>
      <div class="scroller" data-direction="right" data-speed="slow">
        <div class="scroller__inner">
          <div className="relative">
            <Image src="/sponsers/GNIT.png" alt="" fill />
          </div>
          <div className="relative">
            <Image src="/sponsers/JIS.png" alt="" fill />
          </div>
          <div className="relative">
            <Image src="/sponsers/council.png" alt="" fill />
          </div>
          <div className="relative">
            <Image src="/sponsers/teenageresports.png" alt="" fill />
          </div>
          <div className="relative">
            <Image src="/sponsers/edugraph.jpg" alt="" fill />
          </div>
          <div className="relative">
            <Image src="/sponsers/techghosh.png" alt="" fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
