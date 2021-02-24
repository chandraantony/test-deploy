const express = require('express');
const shipController = require('../../controllers/shipController');

const router = express.Router();

router.get('/', (req, res) => {
  res.json('api/v1/shipping');
});
router.get('/boat', shipController.getShip);
router.get('/testResponse', shipController.makeResponse)

module.exports = router;
