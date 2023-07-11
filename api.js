const express = require('express');
const db = require('./db');

const router = express.Router();

router.get('/search/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Connect to the database
    await db.connect();

    // Query the database for the image associated with the given ID
    const result = await db.query('SELECT IMAGE FROM user WHERE id = $1', [id]);

    // Disconnect from the database
    await db.end();

    if (result.rows.length === 0) {
      // Image not found
      res.status(404).json({ message: 'Image not found' });
    } else {
      // Image found, send the response
      res.json({ image: result.rows[0].image });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Working on it!!' });
  }
});

module.exports = router;