require("dotenv").config();  // ✅ Only call it once at the top
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");  // ✅ Import cors
const app = express();

// Enable CORS and parse JSON requests
app.use(cors());  // ✅ Enable CORS
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)  // Make sure MONGO_URI is set in your environment variables
    .then(() => console.log("✅ MongoDB Connected"))
    .catch((err) => console.error("❌ MongoDB Connection Error:", err.message));

// Routes
app.use("/api/jobs", require("./routes/Jobs"));  // Update path if necessary

// Set PORT and start the server
const PORT = process.env.PORT || 5000;  // Default to 5000 if no PORT is specified
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
