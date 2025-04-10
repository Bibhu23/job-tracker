import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function JobCard({ job, onDelete, onStatusChange }) {
    const handleStatusUpdate = (e) => {
        onStatusChange(job._id, e.target.value);
    };

    const badgeColors = {
        Applied: "secondary",
        Interview: "info",
        Offer: "success",
        Rejected: "danger"
    };

    return (
        <div className="card shadow-sm border-0 mb-4 rounded-4 bg-white">
            <div className="card-body">
                <h5 className="card-title text-primary fw-bold mb-2">
                    {job.company} — {job.role}
                </h5>
                <p className="card-text text-muted mb-2">
                    📅 <small className="fw-medium">{new Date(job.appliedDate).toLocaleDateString()}</small><br />
                    {job.link && (
                        <a
                            href={job.link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-decoration-none fw-medium"
                        >
                            🔗 View Job Posting
                        </a>
                    )}
                </p>

                <div className="d-flex flex-wrap align-items-center gap-3 mt-3">
                    <select
                        value={job.status}
                        onChange={handleStatusUpdate}
                        className="form-select w-auto"
                        style={{
                            borderColor: `var(--bs-${badgeColors[job.status]})`,
                            fontWeight: "500"
                        }}
                    >
                        <option>Applied</option>
                        <option>Interview</option>
                        <option>Offer</option>
                        <option>Rejected</option>
                    </select>

                    <span
                        className={`badge bg-${badgeColors[job.status]} px-3 py-2 rounded-pill fw-medium`}
                    >
                        {job.status}
                    </span>

                    <button
                        onClick={() => onDelete(job._id)}
                        className="btn btn-outline-danger btn-sm fw-medium"
                    >
                        🗑️ Delete
                    </button>
                </div>
            </div>
        </div>
    );
}
