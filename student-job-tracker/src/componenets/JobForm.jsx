import { useState } from 'react';
import API from '../api';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function JobForm({ onJobAdded }) {
    const [form, setForm] = useState({
        company: '',
        role: '',
        status: 'Applied',
        appliedDate: '',
        link: '',
    });

    const [alertMessage, setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await API.post('', form);
            onJobAdded();

            // Set custom alert message based on status
            let message = '';
            switch (form.status) {
                case 'Applied':
                    message = '✅ Application submitted successfully!';
                    break;
                case 'Interview':
                    message = '🎤 Interview scheduled! Good luck!';
                    break;
                case 'Offer':
                    message = '🎉 Congrats! You got an offer!';
                    break;
                case 'Rejected':
                    message = '🙁 Rejected. Don’t worry, better ones ahead!';
                    break;
                default:
                    message = '✅ Job added!';
            }

            setAlertMessage(message);
            setShowAlert(true);

            // Clear form
            setForm({ company: '', role: '', status: 'Applied', appliedDate: '', link: '' });

            // Hide alert after 3 seconds
            setTimeout(() => setShowAlert(false), 3000);
        } catch (err) {
            console.error("❌ Error posting job:", err);
        }
    };

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="card p-4 mb-4 shadow rounded-4 border-light bg-light-subtle"
            >
                <h4 className="mb-4 fw-bold text-primary text-center">
                    🎯 Track a New Job Application
                </h4>
                <div className="row g-4">
                    <div className="col-md-6">
                        <input
                            type="text"
                            name="company"
                            value={form.company}
                            onChange={handleChange}
                            className="form-control form-control-lg"
                            placeholder="🏢 Company Name"
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <input
                            type="text"
                            name="role"
                            value={form.role}
                            onChange={handleChange}
                            className="form-control form-control-lg"
                            placeholder="💼 Role"
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <input
                            type="date"
                            name="appliedDate"
                            value={form.appliedDate}
                            onChange={handleChange}
                            className="form-control form-control-lg"
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <input
                            type="text"
                            name="link"
                            value={form.link}
                            onChange={handleChange}
                            className="form-control form-control-lg"
                            placeholder="🔗 Job Link"
                        />
                    </div>
                    <div className="col-md-6">
                        <select
                            name="status"
                            value={form.status}
                            onChange={handleChange}
                            className="form-select form-select-lg"
                        >
                            <option>Applied</option>
                            <option>Interview</option>
                            <option>Offer</option>
                            <option>Rejected</option>
                        </select>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-success btn-lg w-50 fw-semibold">
                            ✅ Submit
                        </button>
                    </div>
                </div>
            </form>

            {showAlert && (
                <div className="alert alert-success text-center fw-semibold shadow-sm rounded-3">
                    {alertMessage}
                </div>
            )}
        </>
    );
}
