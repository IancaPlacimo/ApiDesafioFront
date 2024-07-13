const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, "assets")));

// Endpoint para obter dados do carrossel
app.get("/api/carousel", (req, res) => {
  try {
    // Ler dados do arquivo JSON
    const carouselData = require("./data/carouselData.json");
    res.json(carouselData);
  } catch (error) {
    console.error("Erro ao ler dados do carrossel:", error);
    res.status(500).json({ error: "Erro ao ler dados do carrossel" });
  }
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
