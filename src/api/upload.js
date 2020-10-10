const express = require('express');
const uploadController = require('../../controllers/uploadController')
const upload = require('../../helpers/functions')
const router = express.Router();

router.post('/',  upload.file.single('upload'), uploadController.upload);

module.exports = router;
