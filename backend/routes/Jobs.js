const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

// POST: Add new job
router.post("/", async (req, res) => {
    console.log("📨 POST /api/jobs reached:", req.body); 
    try {
        const newJob = new Job(req.body);
        const savedJob = await newJob.save();
        res.status(201).json(savedJob);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET: Fetch all jobs
router.get("/", async (req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
    // UPDATE: Update a job
router.patch("/:id", async (req, res) => {
    try {
        const updated = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// DELETE: Remove a job
router.delete("/:id", async (req, res) => {
    try {
        await Job.findByIdAndDelete(req.params.id);
        res.json({ message: "Job deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


module.exports = router;
