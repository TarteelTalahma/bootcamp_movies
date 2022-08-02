const render = new renderer($(".movies-container"), $("#movie-template"));

const feachMovie = function () {
  let movieName = $("#input-movie").val();
  $.get(`/movies/${movieName}`, function (response) {
    render.renderMovie(response);
  });
};

clickImg = function (imgId) {
  let div = $(imgId).closest(".movies");
  let title = div.find("#title").find("a").text();
  $.get(
    `http://www.omdbapi.com/?apikey=b0d39b78&t=` + title,
    function (response) {
      response.Ratings.forEach((r) => {
        div.find("#rating").append(`<li>${r.Value}</li>`);
      });
    }
  );
};
