const express = require('express');
const { createTheme, getThemes } = require('../controller/themecontroller.js');

const router = express.Router();

router.get('/', getThemes);
router.post('/', createTheme);

module.exports = router;
