const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('From us');
  res.render()
});

module.exports = router;