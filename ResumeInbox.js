import React, { useState } from 'react';

const ResumeInbox = () => {
  const [emails] = useState([
    {
      id: 1,
      sender: 'applicant1@gmail.com',
      subject: 'Resume for Frontend Developer',
      body: 'Hi, please find my resume attached. Regards, Alice Smith',
      resume: 'Alice_Smith_Resume.pdf',
    },
    {
      id: 2,
      sender: 'applicant2@gmail.com',
      subject: 'Application for Data Analyst Role',
      body: 'Attached is my resume. Thanks, Bob Johnson',
      resume: 'Bob_Johnson_Resume.pdf',
    },
  ]);

  const [stored, setStored] = useState([]);

  const handleStore = (id) => {
    if (!stored.includes(id)) {
      setStored(prev => [...prev, id]);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Email Inbox (Simulated)</h2>
      {emails.map(email => (
        <div key={email.id} style={styles.card}>
          <p><strong>From:</strong> {email.sender}</p>
          <p><strong>Subject:</strong> {email.subject}</p>
          <p><strong>Body:</strong> {email.body}</p>
          <p><strong>Attachment:</strong> {email.resume}</p>
          <button
            style={styles.button}
            onClick={() => handleStore(email.id)}
            disabled={stored.includes(email.id)}
          >
            {stored.includes(email.id) ? 'Stored' : 'Extract & Store'}
          </button>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
  },
  card: {
    border: '1px solid #ccc',
    padding: '15px',
    marginBottom: '15px',
    borderRadius: '6px',
    backgroundColor: '#f9f9f9',
  },
  button: {
    marginTop: '10px',
    padding: '8px 16px',
    backgroundColor: '#1976d2',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
  },
};

export default ResumeInbox;
