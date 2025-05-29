import React, { useState } from 'react';

const applicantsData = [
  { id: 1, name: 'Alice Smith', resume: 'alice_resume.pdf' },
  { id: 2, name: 'Bob Johnson', resume: 'bob_resume.pdf' },
];

const departments = ['Finance', 'IM', 'HR', 'Operations'];

const ForwardToManager = () => {
  const [shortlisted, setShortlisted] = useState({});
  const [selectedDept, setSelectedDept] = useState({});
  const [forwarded, setForwarded] = useState([]);

  const handleShortlist = (id) => {
    setShortlisted((prev) => ({ ...prev, [id]: true }));
  };

  const handleDepartmentChange = (id, value) => {
    setSelectedDept((prev) => ({ ...prev, [id]: value }));
  };

  const handleForward = (applicant) => {
    if (!selectedDept[applicant.id]) {
      alert('Please select a department.');
      return;
    }

    setForwarded((prev) => [
      ...prev,
      {
        name: applicant.name,
        dept: selectedDept[applicant.id],
        time: new Date().toLocaleString(),
      },
    ]);
    setShortlisted((prev) => ({ ...prev, [applicant.id]: false }));
    setSelectedDept((prev) => ({ ...prev, [applicant.id]: '' }));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Forward to Manager</h2>
      {applicantsData.map((applicant) => (
        <div key={applicant.id} style={styles.applicantCard}>
          <strong>{applicant.name}</strong> &nbsp;| Resume: {applicant.resume}

          {!shortlisted[applicant.id] ? (
            <button
              onClick={() => handleShortlist(applicant.id)}
              style={styles.shortlistBtn}
            >
              Shortlist
            </button>
          ) : (
            <div style={{ marginTop: '10px' }}>
              <label>Select Department:</label>
              <select
                value={selectedDept[applicant.id] || ''}
                onChange={(e) =>
                  handleDepartmentChange(applicant.id, e.target.value)
                }
                style={styles.select}
              >
                <option value="">-- Select --</option>
                {departments.map((dept, idx) => (
                  <option key={idx} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
              <button
                onClick={() => handleForward(applicant)}
                style={styles.forwardBtn}
              >
                Forward
              </button>
            </div>
          )}
        </div>
      ))}

      {forwarded.length > 0 && (
        <div style={styles.forwardedBox}>
          <h3>Forwarded Applicants:</h3>
          <ul>
            {forwarded.map((fwd, idx) => (
              <li key={idx}>
                {fwd.name} forwarded to <strong>{fwd.dept}</strong> at {fwd.time}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const styles = {
  applicantCard: {
    padding: '15px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
  shortlistBtn: {
    marginLeft: '20px',
    padding: '6px 12px',
    backgroundColor: '#1976d2',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '4px',
  },
  select: {
    marginLeft: '10px',
    padding: '6px',
  },
  forwardBtn: {
    marginLeft: '10px',
    padding: '6px 12px',
    backgroundColor: '#43a047',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  forwardedBox: {
    marginTop: '30px',
    padding: '15px',
    backgroundColor: '#e0f2f1',
    borderRadius: '5px',
  },
};

export default ForwardToManager;
