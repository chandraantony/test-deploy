const express = require('express');

const auth = require('./auth');
const shipping = require('./shipping')
const upload = require('./upload')
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/auth', auth);
router.use('/shipping', shipping);
router.use('/upload', upload)

module.exports = router;
