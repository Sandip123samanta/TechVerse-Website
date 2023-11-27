'use client'
import React, { useEffect, useState } from 'react';
import styles from './style.module.css'

const Timer = ({ targetDate }) => {
  const calculateTimeRemaining = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }
  };

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerInterval = setInterval(calculateTimeRemaining, 1000);
    return () => clearInterval(timerInterval);
  }, [targetDate]);

  return (
    <div className={styles.timer}>
      <div>
        <h1 className='lg:text-[2vw] text-[7vw] font-serif'>We are Launching Soon!</h1>
      </div>
      <div>
        <div className='border border-gray-200 rounded-lg shadow mt-7'>
           <h1 className='lg:text-[5vw] text-[12vw] p-3'>{days} : {hours} : {minutes} : {seconds}</h1>
        </div>
      </div>
    </div>
  );
};

export default Timer;