import { useEffect, useState } from 'react';
import API from '../api';
import JobCard from './JobCard';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function JobList() {
    const [jobs, setJobs] = useState([]);
    const [filter, setFilter] = useState('');

    const fetchJobs = async () => {
        const res = await API.get('/');
        setJobs(res.data);
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    const deleteJob = async (id) => {
        await API.delete(`/${id}`);
        fetchJobs();
    };

    const updateStatus = async (id, status) => {
        await API.put(`/${id}`, { status });
        fetchJobs();
    };

    const filteredJobs = filter
        ? jobs.filter((job) => job.status === filter)
        : jobs;

    return (
        <div className="container px-0">
            <div className="mb-4 d-flex flex-wrap align-items-center gap-3 justify-content-between">
                <div className="d-flex align-items-center gap-2">
                    <label className="form-label mb-0 fw-semibold text-dark">
                        🎯 Filter by Status:
                    </label>
                    <select
                        className="form-select w-auto"
                        onChange={(e) => setFilter(e.target.value)}
                        value={filter}
                    >
                        <option value="">All</option>
                        <option>Applied</option>
                        <option>Interview</option>
                        <option>Offer</option>
                        <option>Rejected</option>
                    </select>
                </div>
                <span className="text-muted small">
                    Showing <strong>{filteredJobs.length}</strong> of <strong>{jobs.length}</strong> jobs
                </span>
            </div>

            {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                    <JobCard
                        key={job._id}
                        job={job}
                        onDelete={deleteJob}
                        onStatusChange={updateStatus}
                    />
                ))
            ) : (
                <div className="alert alert-warning text-center">
                    🚫 No job applications found.
                </div>
            )}
        </div>
    );
}
