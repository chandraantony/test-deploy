const express = require('express');
const uploadController = require('../../controllers/uploadController');
const upload = require('../../helpers/functions');

const router = express.Router();

router.post('/', upload.file, uploadController.upload);
// router.post('/v2', upload.filedll , uploadController.uploadFile)

module.exports = router;
