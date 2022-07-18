const express = require('express');
const router = express.Router();

// Ejemplo número 1.
router.get('/', function (req, res) {
  res.send('home page');
})

// Ejemplo número 2.
router.post('/activity', function (req, res) {
  res.send('created user');
})
// Ejemplo número 3.
router.put('/home/section1', function (req, res) {
  res.send('modify user');
})
module.exports = router;