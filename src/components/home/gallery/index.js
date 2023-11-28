"use client";
import React from "react";
import Image from "next/image";
import {
  floating1,
  floating2,
  floating3,
  floating4,
  floating5,
  floating6,
  floating7,
  floating8,
} from "./images";
import "./style.css";

function Gallery() {
  return (
    <>
      <h1 className="text-white text-center text-[5vw] font-bold galleryText">Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-screen h-screen p-6">
        <div className="grid gap-4">
          <div className="relative overflow-hidden">
            <Image
              className="h-auto max-w-full rounded-lg hover:scale-[1.2] transition-all duration-300 ease-linear opacity-[.7]"
              src={floating1}
              alt="galleryImage"
              fill={true}
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              className="h-auto max-w-full rounded-lg hover:scale-[1.2] transition-all duration-300 ease-linear  opacity-[.7]"
              src={floating2}
              alt="galleryImage"
              fill={true}
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              className="h-auto max-w-full rounded-lg hover:scale-[1.2] transition-all duration-300 ease-linear  opacity-[.7]"
              src={floating3}
              alt="galleryImage"
              fill={true}
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div className="relative overflow-hidden">
            <Image
              className="h-auto max-w-full rounded-lg hover:scale-[1.2] transition-all duration-300 ease-linear  opacity-[.7]"
              src={floating4}
              alt="galleryImage"
              fill={true}
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              className="h-auto max-w-full rounded-lg hover:scale-[1.2] transition-all duration-300 ease-linear  opacity-[.7]"
              src={floating5}
              alt="galleryImage"
              fill={true}
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              className="h-auto max-w-full rounded-lg hover:scale-[1.2] transition-all duration-300 ease-linear  opacity-[.7]"
              src={floating6}
              alt="galleryImage"
              fill={true}
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div className="relative overflow-hidden">
            <Image
              className="h-auto max-w-full rounded-lg hover:scale-[1.2] transition-all duration-300 ease-linear  opacity-[.7]"
              src={floating7}
              alt="galleryImage"
              fill={true}
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              className="h-auto max-w-full rounded-lg hover:scale-[1.2] transition-all duration-300 ease-linear  opacity-[.7]"
              src={floating8}
              alt="galleryImage"
              fill={true}
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              className="h-auto max-w-full rounded-lg hover:scale-[1.2] transition-all duration-300 ease-linear  opacity-[.7]"
              src={floating4}
              alt="galleryImage"
              fill={true}
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div className="relative overflow-hidden">
            <Image
              className="h-auto max-w-full rounded-lg hover:scale-[1.2] transition-all duration-300 ease-linear  opacity-[.7]"
              src={floating6}
              alt="galleryImage"
              fill={true}
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              className="h-auto max-w-full rounded-lg hover:scale-[1.2] transition-all duration-300 ease-linear  opacity-[.7]"
              src={floating2}
              alt="galleryImage"
              fill={true}
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              className="h-auto max-w-full rounded-lg hover:scale-[1.2] transition-all duration-300 ease-linear  opacity-[.7] "
              src={floating1}
              alt="galleryImage"
              fill={true}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;