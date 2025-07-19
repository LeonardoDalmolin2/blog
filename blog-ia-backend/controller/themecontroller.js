const Theme = require('../models/theme.js');

const createTheme = async (req, res) => {
  const { name } = req.body;
  const theme = new Post({ name });

  try {
    await theme.save();
    res.status(201).json(theme);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getThemes = async (req, res) => {
  try {
    const themes = await Theme.find().sort({ createdAt: -1 });
    res.json(themes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createTheme, getThemes };
