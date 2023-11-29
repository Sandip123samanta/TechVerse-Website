"use client"
import React, { useEffect, useRef } from 'react';
import rocket from '../../../../public/rocketgif.gif';
import Image from 'next/image';
import './style.css';

const CustomCursor = () => {
  // Refs for the cursor element and the last known mouse position
  const cursorRef = useRef(null);
  const lastMouseX = useRef(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
  const lastMouseY = useRef(typeof window !== 'undefined' ? window.innerHeight / 2 : 0);

  // Function to update cursor position
  const updateCursorPosition = (e) => {
    lastMouseX.current = e.pageX;
    lastMouseY.current = e.pageY - window.scrollY;

    // Set the cursor position
    cursorRef.current.style.top = `${lastMouseY.current}px`;
    cursorRef.current.style.left = `${lastMouseX.current}px`;
  };

  // Event listener for mousemove
  const mouseMoveEvent = (e) => {
    updateCursorPosition(e);
  };

  // Event listener for scroll
  const scrollEvent = () => {
    // Update the cursor position during scrolling
    cursorRef.current.style.top = `${lastMouseY.current}px`;
    cursorRef.current.style.left = `${lastMouseX.current}px`;
  };

  useEffect(() => {
    // Add event listeners on mount
    document.addEventListener('mousemove', mouseMoveEvent);
    document.addEventListener('scroll', scrollEvent);

    // Remove event listeners on unmount
    return () => {
      document.removeEventListener('mousemove', mouseMoveEvent);
      document.removeEventListener('scroll', scrollEvent);
    };
  }, []);

  return (
    <div className='cursor' ref={cursorRef}>
      <Image src={rocket} width={100} alt='rocket' />
    </div>
  );
};

export default CustomCursor;
