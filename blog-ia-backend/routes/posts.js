const express = require('express');
const { createPost, getPosts, getPostById } = require('../controller/postcontroller.js');

const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPostById);
router.post('/', createPost);

module.exports = router;
