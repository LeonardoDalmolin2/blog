require('dotenv').config();
const mongoose = require('mongoose');
const Posts = require('../models/posts.js');

const MONGO_URI = process.env.MONGO_URI;

async function clearPosts() {
  await mongoose.connect(MONGO_URI);
  console.log("Conectado ao MongoDB");

  await Posts.deleteMany({});
  console.log("Todos os posts foram deletados.");

  mongoose.disconnect();
}

clearPosts();
