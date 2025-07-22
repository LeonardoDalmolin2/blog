const Theme = require('../models/theme.js');
const genAI = require('../utils/gemini');

const getThemes = async (req, res) => {
  try {
    const themes = await Theme.find().sort({ createdAt: -1 });
    res.json(themes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const generateThemes = async (req, res) => {
  try {
    console.log("Chamando Gemini...");

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });

    const prompt = "Gere 300 temas curtos e objetivos para posts de blog sobre tecnologia. Responda apenas com os temas em lista numerada, em português brasileiro, sem introdução ou explicação.";

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    console.log("Resposta do Gemini:", text);

    const generatedThemes = text.split('\n').map(line => line.replace(/^\d+[\.\-\)]\s*/, '').trim()).filter(Boolean);

    const savedThemes = [];
    for (const themeName of generatedThemes) {
      const newTheme = new Theme({ name: themeName });
      await newTheme.save();
      savedThemes.push(newTheme);
    }

    res.json(savedThemes);
  } catch (err) {
    console.error("Erro detalhado:", err);
    res.status(500).json({ message: 'Error generating themes with Gemini' });
  }
};

module.exports = { generateThemes, getThemes };
