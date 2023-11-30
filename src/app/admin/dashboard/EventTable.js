// components/EventTable.js
import React from 'react';

const EventTable = ({ events }) => {
  return (
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">Event Name</th>
          <th className="py-2 px-4 border-b">Registrant</th>
          {/* Add more headers based on your data structure */}
        </tr>
      </thead>
      <tbody>
        {events.map((event) => (
          <tr key={event.id}>
            <td className="py-2 px-4 border-b">{event.name}</td>
            <td className="py-2 px-4 border-b">{event.registrant}</td>
            {/* Add more cells based on your data structure */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EventTable;
