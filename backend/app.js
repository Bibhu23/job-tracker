require("dotenv").config();  
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); 
const app = express();

app.use(cors());  
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)  
    .then(() => console.log(" MongoDB Connected"))
    .catch((err) => console.error(" MongoDB Connection Error:", err.message));

app.use("/api/jobs", require("./routes/Jobs"));  

const PORT = process.env.PORT || 5000;  
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
