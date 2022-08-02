const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");
const port = 8080;

const allMovies = {
  movie: {},
};

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));

app.get("/sanity", function (request, response) {
  response.send("Ok");
});

app.get("/movies/:title", (req, response) => {
  let param = req.params.title;
  axios
    .get(`http://www.omdbapi.com/?apikey=b0d39b78&s=` + param)
    .then((res) => {
      allMovies.movie = res.data.Search.map((m) => {
        return {
          Title: m.Title,
          Year: m.Year,
          imdbID: m.imdbID,
          Poster: m.Poster,
        };
      });
      response.send(allMovies.movie);
    });
});

app.listen(port, function () {});
