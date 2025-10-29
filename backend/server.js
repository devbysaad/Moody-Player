const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const connectDB = require("./src/database/db");
const authRoutes = require("./src/routes/auth.route");

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

// Routes
console.log("Mounting auth routes...");
app.use("/auth", authRoutes);
console.log("Auth routes mounted successfully");

// Health check
app.get("/", (req, res) => {
  res.json({ message: "Backend is working!", status: "success" });
});

// Start server
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/`);
  });
};

startServer();