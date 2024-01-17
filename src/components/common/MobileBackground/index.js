'use client';
import React, { useEffect, useState } from 'react';
import './style.css';
import StarsCanvas from '../starbackground/StarBackground';

function index() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const size = window.innerWidth <= 768;
    setIsMobile(size);
  }, []);
  return isMobile ? <div className="mobile-container" /> : <StarsCanvas />;
}

export default index;
