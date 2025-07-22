const express = require('express');
const { generateThemes, getThemes } = require('../controller/themecontroller.js');

const router = express.Router();

router.get('/', getThemes);
router.post('/', generateThemes);

module.exports = router;
