import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import LandingPage from './pages/LandingPage';
import RegistrationPage from './pages/RegistrationPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <Router>
      <div id="app">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/policies" element={
              <section className="view active">
                <div className="page-header">
                    <h2>Coverage Policies</h2>
                    <p>Details about triggers and payout calculations.</p>
                </div>
                <div className="empty-state">
                    <h3>Policies under evaluation</h3>
                </div>
              </section>
            } />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
