import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ApplicantPage.css";

const ApplicantPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ jobTitle: '', resumeLink: '' });

  const applications = [
    { id: 1, jobTitle: "Software Engineer", status: "Interview Scheduled", date: "2025-05-20" },
    { id: 2, jobTitle: "Frontend Developer", status: "Under Review", date: "2025-05-15" },
    { id: 3, jobTitle: "QA Tester", status: "Rejected", date: "2025-04-30" },
  ];

  const handleOpenForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Applied to ${formData.jobTitle} successfully!`);
    setShowForm(false);
  };

  return (
    <div className="applicant-container">
      <aside className="profile-card">
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="Applicant Profile"
          className="profile-img"
        />
        <h2>John Doe</h2>
        <p>Applicant</p>
        <button className="logout-btn" onClick={() => window.location.href = '/'}>
          Logout
        </button>
      </aside>

      <main className="dashboard">
        <h1>Welcome back, John!</h1>

        <div className="summary-cards">
          <div className="card applications">
            <h3>Applications Submitted</h3>
            <p>12</p>
          </div>
          <div className="card interviews">
            <h3>Interviews Scheduled</h3>
            <p>3</p>
          </div>
          <div className="card offers">
            <h3>Offers Received</h3>
            <p>1</p>
          </div>
        </div>

        <button className="apply-btn" onClick={handleOpenForm}>Apply to New Job</button>

        <section className="applications-list">
          <h2>Recent Applications</h2>
          <table>
            <thead>
              <tr>
                <th>Job Title</th>
                <th>Status</th>
                <th>Date Applied</th>
              </tr>
            </thead>
            <tbody>
              {applications.map(app => (
                <tr key={app.id}>
                  <td>{app.jobTitle}</td>
                  <td className={`status ${app.status.replace(/\s/g, '-').toLowerCase()}`}>
                    {app.status}
                  </td>
                  <td>{app.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {showForm && (
          <div className="modal-overlay">
            <div className="modal">
              <h2>Apply to a New Job</h2>
              <form onSubmit={handleSubmit}>
                <label>
                  Job Title:
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>
                  Resume Link:
                  <input
                    type="url"
                    name="resumeLink"
                    value={formData.resumeLink}
                    onChange={handleChange}
                    required
                  />
                </label>
                <div className="modal-actions">
                  <button type="submit">Submit</button>
                  <button type="button" onClick={handleCloseForm}>Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ApplicantPage;
