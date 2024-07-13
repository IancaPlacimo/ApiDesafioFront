var express = require("express");
var app = express();
var cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Requisição realizada com sucesso!" });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});

app.get("/api/data", (req, res) => {
  // Exemplo de JSON que você deseja retornar
  var jsonData = [
    {
      title: "Ianca Placimo",
      content: "Lorem Lipsum",
      imageURL: "/assets/img/person.png",
    },
    {
      title: "Andrew Delucca",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
      imageURL: "/assets/img/person.png",
    },
    {
      title: "Harry Potter",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
      imageURL: "/assets/img/person.png",
    },
    {
      title: "Miles Morales",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
      imageURL: "/assets/img/person.png",
    },
    {
      title: "Anderson Silva",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
      imageURL: "/assets/img/person.png",
    },
    {
      title: "Tim Maia",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
      imageURL: "/assets/img/person.png",
    },
  ];

  // Enviando o JSON como resposta
  res.json(jsonData);
});
