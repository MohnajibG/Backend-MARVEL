const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/comics", async (req, res) => {
  try {
    let { title, page } = req.query;
    if (!page) page = 0;
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${
        process.env.API_KEY
      }&title=${title}&limit=100&skip=${Number(page) * limit}`
    );

    res.json(response.data);
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des données Marvel:",
      error.message
    );
    res.status(500).json({ message: "Erreur du serveur" });
  }
});
router.get("/characters", async (req, res) => {
  try {
    let { name, page } = req.query;
    if (!page) page = 0;
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${
        process.env.API_KEY
      }&name=${name}&limit=100&skip=${Number(page) * 100}`
    );

    res.json(response.data);
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des données Marvel:",
      error.message
    );
    res.status(500).json({ message: "Erreur du serveur" });
  }
});

router.get("/comics/:characterId", async (req, res) => {
  try {
    const characterId = req.params.characterId;
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${characterId}?apiKey=${process.env.API_KEY}`
    );

    res.json(response.data);
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des données Marvel:",
      error.message
    );
    res.status(500).json({ message: "Erreur du serveur" });
  }
});

router.get("/comic/:comicId", async (req, res) => {
  try {
    const comicId = req.params.comicId;
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${comicId}?apiKey=${process.env.API_KEY}`
    );

    res.json(response.data);
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des données Marvel:",
      error.message
    );
    res.status(500).json({ message: "Erreur du serveur" });
  }
});

module.exports = router;
