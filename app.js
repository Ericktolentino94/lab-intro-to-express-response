const express = require("express");
const app = express();

const magic8Responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes - Definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes, and signs point to yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.get('/tim-gunn', (req, res) => {
    res.send('Make it work')
  })

  app.get('/Emeril', (req, res) => {
    res.send('Bam')
  })

  app.get('/BruceBanner', (req, res) => {
    res.send(`Don't make me angry`)
  })

  app.get('/BruceBanner', (req, res) => {
    res.send(`Don't make me angry`)
  })
  
  app.get('/JamesBond', (req, res) => {
    res.send(`the name is Bond, James Bond`)
  })

  app.get('/Zeus', (req, res) => {
    res.send(`Release the Kraken`)
  })

app.get("/terminator", (req, res) => {
  res.send("Ill be back");
  res.send("Hasta la vista, baby");
});

app.get("/magic8", (req, res) => {
  const randomIndex = Math.floor(Math.random() * magic8Responses.length)
  const randomResponse = magic8Responses[randomIndex]
  res.send(`${randomResponse}`)
});

app.listen(3005, () => {
  console.log("I am listening for requests on port 3005!");
});
