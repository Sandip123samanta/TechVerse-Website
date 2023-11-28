"use client";
// pages/index.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/admin'); // Define your API route
        setResponseData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='mt-96 text-xl text-white'>
      <h1>Data Dashboard</h1>
      <ul>
        {responseData.map((item) => (
          <li key={item._id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
