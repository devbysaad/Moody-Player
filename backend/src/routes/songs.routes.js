const express = require('express');
const multer = require('multer');
const uploadFile = require('../services/storege.service');
const songModel = require('../models/song.model');
const router = express.Router();

const uploadSongs = multer({
  storage: multer.memoryStorage()
});

router.post('/songs', uploadSongs.single('audio'), async (req, res) => {
  console.log(req.body);
  console.log(req.file);

  if (!req.file) return res.status(400).json({ error: "No file uploaded" });

  const fileData = await uploadFile(req.file);
  console.log("FileData:", fileData.url);

  const song = await songModel.create({
    title: req.body.title,
    artist: req.body.artist,
    audio: fileData.url, // fixed: use fileData.url instead of full object
    mood: req.body.mood
  });

  res.status(201).json({
    message: 'Song Added',
    song
  });
});

module.exports = router;
