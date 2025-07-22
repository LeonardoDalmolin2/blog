require('dotenv').config();
const mongoose = require('mongoose');
const Theme = require('../models/theme.js');

const MONGO_URI = process.env.MONGO_URI;

async function clearThemes() {
  await mongoose.connect(MONGO_URI);
  console.log("Conectado ao MongoDB");

  await Theme.deleteMany({});
  console.log("Todos os temas foram deletados.");

  mongoose.disconnect();
}

clearThemes();
