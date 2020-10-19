const express = require('express');
const rulesController = require('../../controllers/rulesController');
const auth = require('../../middleware/auth');

const router = express.Router();

router.get('/', auth.authorization, rulesController.getData);
router.get('/:id', auth.authorization, rulesController.getData);
router.post('/', auth.authorization, rulesController.addData);
router.put('/:id', auth.authorization, rulesController.updateData);
router.delete('/:id', auth.authorization, rulesController.deleteData);

module.exports = router;
