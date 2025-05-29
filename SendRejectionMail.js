import React, { useState } from 'react';

const applicants = [
  { id: 1, name: 'Alice Smith', email: 'alice@example.com' },
  { id: 2, name: 'Bob Johnson', email: 'bob@example.com' },
];

const SendRejectionMail = () => {
  const [selectedApplicant, setSelectedApplicant] = useState('');
  const [reason, setReason] = useState('');
  const [sentMails, setSentMails] = useState([]);

  const handleSend = () => {
    if (!selectedApplicant || !reason) return alert('Select applicant and provide a reason.');

    const applicant = applicants.find(a => a.id === parseInt(selectedApplicant));
    setSentMails(prev => [
      ...prev,
      {
        to: applicant.email,
        name: applicant.name,
        reason: reason,
        time: new Date().toLocaleString(),
      },
    ]);
    setReason('');
    setSelectedApplicant('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Send Rejection Mail</h2>

      <label style={styles.label}>Select Applicant:</label>
      <select
        value={selectedApplicant}
        onChange={(e) => setSelectedApplicant(e.target.value)}
        style={styles.input}
      >
        <option value="">-- Choose Applicant --</option>
        {applicants.map(app => (
          <option key={app.id} value={app.id}>
            {app.name} ({app.email})
          </option>
        ))}
      </select>

      <label style={styles.label}>Reason for Rejection:</label>
      <textarea
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        placeholder="Enter reason..."
        rows="4"
        style={styles.textarea}
      />

      <button onClick={handleSend} style={styles.button}>
        Send Rejection Mail
      </button>

      {sentMails.length > 0 && (
        <div style={styles.sentBox}>
          <h3>Sent Mails:</h3>
          <ul>
            {sentMails.map((mail, idx) => (
              <li key={idx} style={styles.sentItem}>
                <strong>To:</strong> {mail.name} ({mail.to})<br />
                <strong>Reason:</strong> {mail.reason}<br />
                <small>{mail.time}</small>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const styles = {
  label: {
    display: 'block',
    marginTop: '15px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    marginTop: '5px',
    resize: 'vertical',
  },
  button: {
    marginTop: '15px',
    padding: '10px 20px',
    backgroundColor: '#d32f2f',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '4px',
  },
  sentBox: {
    marginTop: '30px',
    backgroundColor: '#f1f1f1',
    padding: '15px',
    borderRadius: '6px',
  },
  sentItem: {
    marginBottom: '10px',
    paddingBottom: '10px',
    borderBottom: '1px solid #ccc',
  },
};

export default SendRejectionMail;
