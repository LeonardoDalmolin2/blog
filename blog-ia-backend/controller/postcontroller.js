const Post = require('../models/posts.js');
const genAI = require('../utils/gemini');
const Theme = require('../models/theme.js');

const createPost = async (req, res) => {
  const { title, text } = req.body;
  const post = new Post({ title, text });

  try {
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (!post) {
      return res.status(404).json({ message: 'Post não encontrado' })
    }
    res.json(post)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

const generatePost = async (req, res) => {
  try {
    console.log("Buscando tema não utilizado...");

    const theme = await Theme.findOne({ alreadyUsed: false });

    if (!theme) {
      return res.status(404).json({ message: "Nenhum tema disponível para gerar post." });
    }

    console.log("Tema encontrado:", theme.name);

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });

    const prompt = `Crie um post de blog sobre o tema: "${theme.name}". 
    Escreva em português brasileiro, de forma natural e envolvente, com título e texto separados por '|||'. Responda apenas com o titulo e texto, sem introdução ou explicação.`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    console.log("Resposta do Gemini:", text);

    const [title, ...bodyParts] = text.split('|||');
    const body = bodyParts.join('|||').trim();

    if (!title || !body) {
      return res.status(500).json({ message: "Erro ao gerar post: formato inesperado da resposta." });
    }

    const newPost = new Post({
      title: title.trim(),
      text: body
    });

    await newPost.save();

    theme.alreadyUsed = true;
    await theme.save();

    if (res) {
      res.json(newPost);
    } else {
      console.log("Post gerado com sucesso via cronjob:", newPost.title);
    }

  } catch (err) {
    console.error("Erro detalhado:", err);
    if (res) {
      res.status(500).json({ message: "Erro ao gerar post com Gemini." });
    } else {
      console.error("Erro ao gerar post com Gemini.");
    }
  }
};

module.exports = { createPost, getPosts, getPostById, generatePost };
