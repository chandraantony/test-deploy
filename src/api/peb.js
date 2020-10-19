const express = require('express');
const pebController = require('../../controllers/pebController');
const auth = require('../../middleware/auth');

const router = express.Router();

router.post('/', auth.authorization, pebController.addPEB);
router.put('/:id', auth.authorization, pebController.updatePeb);
router.delete('/:id', auth.authorization, pebController.deletePeb);
router.get('/', auth.authorization, pebController.dataPeb);
router.get('/:id', auth.authorization, pebController.dataPeb);

module.exports = router;
