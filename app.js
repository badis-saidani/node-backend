// Init
const express = require("express");
const cors = require("cors");
const app = express();

// Middleware
//app.use(cors());

// Route
app.get("/api/message", (req, res) => {
	res.json({message: "Badis Saidani" });
});


// Start the serve
const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Backend server is running on port ${PORT}`);
});