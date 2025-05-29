import React, { useState } from 'react';

const SendOfferLetter = () => {
  const [email, setEmail] = useState('');

  const sendOffer = () => {
    alert(`Offer letter sent to ${email}`);
    setEmail('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3>Send Offer Letter</h3>
      <input
        type="email"
        placeholder="Applicant Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ margin: '10px', padding: '8px', width: '250px' }}
      />
      <button onClick={sendOffer} style={{ padding: '10px 20px' }}>
        Send
      </button>
    </div>
  );
};

export default SendOfferLetter;
