const express = require('express');
const authController = require('../../controllers/authController')


const router = express.Router();

router.get('/', (req, res) => {
  res.json('api/v1/auth');
});
router.post('/login',authController.login)
router.get('/register',authController.registrer)

module.exports = router;
