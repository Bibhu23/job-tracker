// DSA Problem 2

const jobApplications = [
    { company: "Google", role: "SDE", status: "Applied" },
    { company: "Amazon", role: "Backend", status: "Interview" },
    { company: "Meta", role: "Frontend", status: "Applied" },
    { company: "Netflix", role: "DevOps", status: "Rejected" },
    { company: "Adobe", role: "QA", status: "Applied" },
    { company: "Apple", role: "SDE", status: "Offer" },
    { company: "Tesla", role: "SDE", status: "Rejected" },
    { company: "Microsoft", role: "ML", status: "Interview" },
    { company: "LinkedIn", role: "PM", status: "Rejected" },
    { company: "Spotify", role: "UI/UX", status: "Applied" },
];

function countStatus(applications) {
    const frequency = {};

    for (let job of applications) {
        const status = job.status;
        frequency[status] = (frequency[status] || 0) + 1;
    }

    return frequency;
}

const result = countStatus(jobApplications);
console.log("✅ Status Frequency:", result);
