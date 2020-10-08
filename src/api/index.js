const express = require('express');

const auth = require('./auth');
const shipping = require('./shipping')
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/auth', auth);
router.use('/shipping', shipping);

module.exports = router;
