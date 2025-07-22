require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const postsRoutes = require('./routes/posts.js');
const themesRoutes = require('./routes/theme.js');
const cron = require('node-cron');
const { generatePost } = require('./controller/postcontroller.js');

cron.schedule('03 16 * * *', () => {
  console.log("Executando geração diária de post...");
  generatePost();
});

const app = express();

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/posts', postsRoutes);
app.use('/themes', themesRoutes);


mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Conectado ao MongoDB com sucesso!');
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err.message);
  });

app.get('/', (req, res) => {
  res.send('API do Blog de IA está no ar!');
});
