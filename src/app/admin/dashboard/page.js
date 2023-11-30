// pages/dashboard.js
"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EventTable from './EventTable';

const Dashboard = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Replace with your API endpoint for fetching events
    axios.get('/api/admin').then((response) => {
      setEvents(response.data);
    });
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Event Management Dashboard</h1>
      <EventTable events={events} />
    </div>
  );
};

export default Dashboard;
