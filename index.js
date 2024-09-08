const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

const App = async () => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com`
    );
    console.log(response.data.message);
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des données de l'API Marvel :",
      error.message
    );
  }
};
const comicsRouter = require("./routes/routes");
app.use(comicsRouter);
App();

app.all("*", (req, res) => {
  res.status(404).json({ message: "Not Found" });
});

app.listen(process.env.PORT, () => {
  console.log("SERVER STARKED 🫡  🫡  🫡  🫡 ");
});
