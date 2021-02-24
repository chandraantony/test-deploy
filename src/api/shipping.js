const express = require('express');
const shipController = require('../../controllers/shipController');
const shippingController = require('../../controllers/shippingController')

const router = express.Router();

router.get('/', (req, res) => {
  res.json('api/v1/shipping');
});
router.get('/boat', shipController.getShip);
router.post('/checkAwb' , shippingController.cekResi)
router.get('/couriers', shippingController.listCourier)
router.get('/testResponse', shipController.makeResponse)

module.exports = router;
