const renderer = class {
  constructor(moviesContainer, movieTemplate) {
    this.moviesContainer = moviesContainer;
    this.movieTemplate = movieTemplate;
  }

  renderMovie = (currentMovie) => {
    this.moviesContainer.empty();
    const source = this.movieTemplate.html();
    const template = Handlebars.compile(source);
    const someHTML = template({ currentMovie });
    this.moviesContainer.append(someHTML);
  };
};
