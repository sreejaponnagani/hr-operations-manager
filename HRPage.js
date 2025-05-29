import React, { useState } from 'react';
import './HRPage.css';

import ForwardToManager from './sections/ForwardToManager';
import ViewApplicants from './sections/ViewApplicants';
import ScheduleInterview from './sections/ResumeInbox';
import InterviewResults from './sections/InterviewResults';
import SendOfferLetter from './sections/SendOfferLetter';
import SendRejectionMail from './sections/SendRejectionMail';
import Reports from './sections/Reports';
import ResumeInbox from './sections/ResumeInbox';

const HRPage = () => {
  const [activeSection, setActiveSection] = useState('forward');

  const menuItems = [
    { key: 'forward', label: 'Forward to Manager' },
    { key: 'viewApplicants', label: 'View Applicants' },
    { key: 'resumeInbox', label: 'Resume Inbox' },
    { key: 'interviewResults', label: 'Interview Results' },
    { key: 'sendOffer', label: 'Send Offer Letter' },
    { key: 'sendRejection', label: 'Send Rejection Mail' },
    { key: 'reports', label: 'Reports' },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'forward':
        return <ForwardToManager />;
      case 'viewApplicants':
        return <ViewApplicants />;
      case 'resumeInbox':
        return <ResumeInbox />;
      case 'interviewResults':
        return <InterviewResults />;
      case 'sendOffer':
        return <SendOfferLetter />;
      case 'sendRejection':
        return <SendRejectionMail />;
      case 'reports':
        return <Reports />;
      default:
        return <p>Select a section to manage.</p>;
    }
  };

  return (
    <div className="hr-container">
      {/* Sidebar */}
      <aside className="hr-sidebar">
        <h2 className="sidebar-title">HR Dashboard</h2>
        <ul className="sidebar-list">
          {menuItems.map(item => (
            <li
              key={item.key}
              className={`sidebar-item ${activeSection === item.key ? 'active' : ''}`}
              onClick={() => setActiveSection(item.key)}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <button className="logout-btn" onClick={() => window.location.href = '/'}>
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="hr-content">
        <h1 className="section-title">{menuItems.find(item => item.key === activeSection)?.label}</h1>
        <div className="hr-section-content">{renderContent()}</div>
      </main>
    </div>
  );
};

export default HRPage;
