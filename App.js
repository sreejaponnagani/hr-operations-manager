import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Applicant from './pages/ApplicantPage';
import HR from './HR/HRPage';
import Manager from './pages/Manager';
import Interviewer from './pages/Interviewer';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/applicant" element={<Applicant />} />
        <Route path="/hr" element={<HR />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/interviewer" element={<Interviewer />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;

