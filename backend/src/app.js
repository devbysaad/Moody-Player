const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const SongRoute = require("./routes/songs.routes");
const authRoute = require("./routes/auth.routes");

const app = express();


app.use(cors({
  origin: "http://localhost:5173", // your frontend URL
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());


app.use("/", SongRoute);
app.use("/auth", authRoute);


app.get("/", (req, res) => {
  res.json({ message: "Backend API is running!" });
});

module.exports = app;
