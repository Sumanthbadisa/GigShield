import React, { useState, useEffect } from 'react';
import { IndianRupee, AlertCircle, CheckCircle, RotateCcw, Wand2, HandCoins, X } from 'lucide-react';

function DashboardPage() {
    const [userName, setUserName] = useState('Worker');
    const [isTriggering, setIsTriggering] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const [lastPayout, setLastPayout] = useState(0);

    useEffect(() => {
        const storedName = localStorage.getItem('giqshield_name');
        if (storedName) {
            setUserName(storedName);
        }
    }, []);

    const handleSimulate = () => {
        setIsTriggering(true);
        setTimeout(() => {
            setShowNotification(true);
            setLastPayout(300);
            setIsTriggering(false);
        }, 800);
    };

    return (
        <section className="view active">
            <div className="page-header dashboard-header">
                <div>
                    <h2>Welcome back, <span>{userName}</span> 👋</h2>
                    <p>Here is your protection overview for this week.</p>
                </div>
                <div className="header-actions">
                    <button 
                        className="btn btn-outline" 
                        onClick={handleSimulate}
                        disabled={isTriggering}
                        style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                    >
                        {isTriggering ? (
                            <><Wand2 size={18} className="animate-spin" /> Triggering...</>
                        ) : (
                            <><Wand2 size={18} /> Simulate Trigger</>
                        )}
                    </button>
                </div>
            </div>

            {/* Notification Area */}
            <div className={`notification ${showNotification ? '' : 'hidden'}`}>
                <div className="notification-content">
                    <div className="icon-circle success">
                        <HandCoins size={20} />
                    </div>
                    <div className="notification-text">
                        <h4>Automatic Payout Triggered</h4>
                        <p>Rain detected in your area → <strong className="highlight">₹300 credited</strong> to your wallet.</p>
                    </div>
                </div>
                <button className="close-btn" onClick={() => setShowNotification(false)}>
                    <X size={20} />
                </button>
            </div>

            <div className="metrics-grid">
                <div className="metric-card">
                    <div className="metric-icon blue">
                        <IndianRupee size={24} />
                    </div>
                    <div className="metric-details">
                        <p className="metric-label">Weekly Premium</p>
                        <h3 className="metric-value">₹45</h3>
                    </div>
                </div>
                <div className="metric-card">
                    <div className="metric-icon orange">
                        <AlertCircle size={24} />
                    </div>
                    <div className="metric-details">
                        <p className="metric-label">Risk Level</p>
                        <h3 className="metric-value">Medium</h3>
                    </div>
                </div>
                <div className="metric-card">
                    <div className="metric-icon green">
                        <CheckCircle size={24} />
                    </div>
                    <div className="metric-details">
                        <p className="metric-label">Current Status</p>
                        <h3 className="metric-value status-active">Active Coverage</h3>
                    </div>
                </div>
                <div className="metric-card">
                    <div className="metric-icon purple">
                        <RotateCcw size={24} />
                    </div>
                    <div className="metric-details">
                        <p className="metric-label">Last Payout</p>
                        <h3 className={`metric-value ${lastPayout > 0 ? 'highlight' : ''}`} style={{transition: 'color 1s'}}>
                            ₹{lastPayout}
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DashboardPage;
