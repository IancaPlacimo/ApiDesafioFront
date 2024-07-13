exports.handler = async (event, context) => {
  const meuJson = [
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

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(meuJson),
  };
};
