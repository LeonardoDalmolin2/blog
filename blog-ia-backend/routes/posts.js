const express = require('express');
const { createPost, getPosts, getPostById, generatePost  } = require('../controller/postcontroller.js');
const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPostById);
router.post('/', createPost);
router.post('/generate', generatePost);

module.exports = router;
