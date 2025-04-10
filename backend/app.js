const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // ✅ Import cors
const app = express();

app.use(cors()); // ✅ Enable CORS
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB Connected"))
    .catch((err) => console.error("❌ MongoDB Connection Error:", err.message));

// Routes
app.use("/api/jobs", require("./routes/jobs"));

module.exports = app;
