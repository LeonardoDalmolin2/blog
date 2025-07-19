const express = require('express');
const { createPost, getPosts } = require('../controller/postcontroller.js');

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);

module.exports = router;
