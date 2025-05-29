import React from 'react';

const ViewApplicants = () => {
  const applicants = [
    { id: 1, name: 'Alice', role: 'Frontend Developer' },
    { id: 2, name: 'Bob', role: 'Backend Developer' },
    { id: 3, name: 'Charlie', role: 'Data Analyst' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h3>View Applicants</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>ID</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Name</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Role Applied</th>
          </tr>
        </thead>
        <tbody>
          {applicants.map(app => (
            <tr key={app.id}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{app.id}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{app.name}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{app.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewApplicants;
