const express = require('express');
const cors = require('cors'); // ✅ Import CORS

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Allow CORS for all origins
app.use(cors());

// Default homepage route
app.get("/", (req, res) => {
    res.send("Backend is running!");
});

// Example GET route
app.get("/your-endpoint", (req, res) => {
    res.json({ message: "Your endpoint is working!" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});