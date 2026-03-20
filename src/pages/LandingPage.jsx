import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Zap, Umbrella, PieChart, CheckCircle, Bike, CloudRain } from 'lucide-react';

function LandingPage() {
    const navigate = useNavigate();

    return (
        <section className="view active">
            <div className="hero-section">
                <div className="hero-content">
                    <h1>Protecting Gig Workers from <span>Income Loss</span></h1>
                    <p className="subtitle">AI-powered automatic payouts during severe weather or unexpected disruptions. Because your time is valuable.</p>
                    <button className="btn btn-primary btn-large" onClick={() => navigate('/register')}>Get Started</button>
                </div>
                <div className="hero-visual">
                    <div className="visual-card">
                        <div className="icon-group">
                            <Bike size={80} color="var(--text-primary)" />
                            <div className="weather-alert">
                                <CloudRain size={32} color="var(--accent-blue)" />
                            </div>
                        </div>
                        <div className="protection-badge">
                            <CheckCircle size={20} /> Protected
                        </div>
                    </div>
                </div>
            </div>
            <div className="features-grid">
                <div className="feature-card">
                    <div className="feature-icon"><Zap size={28} /></div>
                    <h3>Instant Payouts</h3>
                    <p>No claims to file. AI detects triggers and pays automatically.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon"><Umbrella size={28} /></div>
                    <h3>Weather Protection</h3>
                    <p>Coverage against heavy rain, extreme heat, and floods.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon"><PieChart size={28} /></div>
                    <h3>Flexible Premiums</h3>
                    <p>Pay daily micro-premiums based on your actual working hours.</p>
                </div>
            </div>
        </section>
    );
}

export default LandingPage;
