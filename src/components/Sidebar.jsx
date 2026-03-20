import React from 'react';
import { NavLink } from 'react-router-dom';
import { ShieldAlert, Home, LineChart, UserPlus, FileText, LogOut, CheckCircle } from 'lucide-react';

function Sidebar() {
  return (
    <nav className="sidebar">
        <div className="sidebar-header">
            <div className="logo">
                <ShieldAlert size={24} style={{ color: 'var(--accent-blue)' }} />
                <span>GigShield <strong>AI</strong></span>
            </div>
        </div>
        <ul className="nav-links">
            <li>
                <NavLink to="/" className={({isActive}) => `nav-btn ${isActive ? 'active' : ''}`}>
                    <Home size={20} /> Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard" className={({isActive}) => `nav-btn ${isActive ? 'active' : ''}`}>
                    <LineChart size={20} /> Dashboard
                </NavLink>
            </li>
            <li>
                <NavLink to="/register" className={({isActive}) => `nav-btn ${isActive ? 'active' : ''}`}>
                    <UserPlus size={20} /> Registration
                </NavLink>
            </li>
            <li>
                <NavLink to="/policies" className={({isActive}) => `nav-btn ${isActive ? 'active' : ''}`}>
                    <FileText size={20} /> Policies
                </NavLink>
            </li>
        </ul>
        <div className="sidebar-footer">
            <button className="nav-btn logout" onClick={() => alert('Logout clicked')}>
                <LogOut size={20} /> Logout
            </button>
        </div>
    </nav>
  );
}

export default Sidebar;
