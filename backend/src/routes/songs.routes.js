// src/routes/songs.routes.js
const express = require('express');
const multer = require('multer');
const uploadFile = require('../services/storege.service'); // keep your service filename
const songModel = require('../models/song.model');
const router = express.Router();

const uploadSongs = multer({ storage: multer.memoryStorage() });

router.post('/songs', uploadSongs.single('audio'), async (req, res) => {
  try {
    console.log('body:', req.body);
    console.log('file:', req.file);

    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    const fileData = await uploadFile(req.file);
    console.log("FileData:", fileData?.url);

    const song = await songModel.create({
      title: req.body.title,
      artist: req.body.artist,
      audio: fileData.url,
      mood: req.body.mood
    });

    res.status(201).json({
      message: 'Song Added',
      song
    });
  } catch (err) {
    console.error('Error adding song:', err);
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
});

router.get('/songs', async (req, res) => {
  try {
    const { mood } = req.query;
    const songs = await songModel.find({ mood: mood });
    res.status(200).json({
      message: 'Songs fetched successfully',
      songs: songs
    });
  } catch (err) {
    console.error('Error fetching songs:', err);
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
});

module.exports = router;
