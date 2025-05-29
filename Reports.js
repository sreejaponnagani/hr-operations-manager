import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
  { status: 'Submitted', count: 20 },
  { status: 'Under Review', count: 10 },
  { status: 'Interview Scheduled', count: 5 },
  { status: 'Rejected', count: 8 },
  { status: 'Offer Sent', count: 3 },
];

const Reports = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h3>Application Status Overview</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="status" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Reports;
