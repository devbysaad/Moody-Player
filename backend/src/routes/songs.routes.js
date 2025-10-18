const express = require('express');
const multer = require('multer');
const router = express.Router();

const uploadSongs = multer({
  storage: multer.memoryStorage()
})

router.post('/songs', (req, res) => {
  console.log(req.body);
  res.status(201).json({
    message: 'Song Added',
    song: req.body,
  });
});

module.exports = router;
