import React from 'react';

const InterviewResults = () => {
  const results = [
    { id: 1, name: 'Alice', score: 85, status: 'Passed' },
    { id: 2, name: 'Bob', score: 70, status: 'Passed' },
    { id: 3, name: 'Charlie', score: 58, status: 'Failed' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h3>Interview Results</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead style={{ backgroundColor: '#f4f4f4' }}>
          <tr>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>ID</th>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Candidate</th>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Score</th>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {results.map(r => (
            <tr key={r.id}>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{r.id}</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{r.name}</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{r.score}</td>
              <td style={{ padding: '10px', border: '1px solid #ccc', color: r.status === 'Passed' ? 'green' : 'red' }}>{r.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InterviewResults;
