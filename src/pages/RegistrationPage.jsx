import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, MapPin, Briefcase, IndianRupee, Loader2 } from 'lucide-react';

function RegistrationPage() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        platform: '',
        income: ''
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        // Simulate API call
        setTimeout(() => {
            // Setup simple local storage to pass name to dashboard
            localStorage.setItem('giqshield_name', formData.name.split(' ')[0]);
            setIsLoading(false);
            navigate('/dashboard');
        }, 800);
    };

    return (
        <section className="view active">
            <div className="page-header">
                <h2>Join GigShield AI</h2>
                <p>Secure your income today. Registration takes less than a minute.</p>
            </div>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <div className="input-with-icon">
                            <i><User size={18} /></i>
                            <input type="text" id="name" required placeholder="John Doe" value={formData.name} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">City / Location</label>
                        <div className="input-with-icon">
                            <i><MapPin size={18} /></i>
                            <input type="text" id="location" required placeholder="Mumbai, India" value={formData.location} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="platform">Primary Platform</label>
                        <div className="input-with-icon">
                            <i><Briefcase size={18} /></i>
                            <select id="platform" required value={formData.platform} onChange={handleChange}>
                                <option value="" disabled>Select Platform</option>
                                <option value="swiggy">Swiggy</option>
                                <option value="zomato">Zomato</option>
                                <option value="amazon">Amazon</option>
                                <option value="uber">Uber / Ola</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="income">Average Daily Income (₹)</label>
                        <div className="input-with-icon">
                            <i><IndianRupee size={18} /></i>
                            <input type="number" id="income" required placeholder="800" value={formData.income} onChange={handleChange} />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-full" disabled={isLoading}>
                        {isLoading ? <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'}}><Loader2 size={20} className="animate-spin" /> Processing...</span> : 'Complete Registration'}
                    </button>
                </form>
            </div>
        </section>
    );
}

export default RegistrationPage;
