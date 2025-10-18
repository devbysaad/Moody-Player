const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  title: String,
  artist: String,
  audio: String, // fixed field name to match route
  mood: String,
});

const songModel = mongoose.model("Song", songSchema);
module.exports = songModel;
