const controllerModule = (function (ui, data) {
  function addEventListenerToAddMovieButton() {
    const addMovieButton = document.querySelector('.add-movie');
    addMovieButton.addEventListener('click', handleAddMovieClick);
  }

  ui.hideError();

  function handleAddMovieClick() {
    const movieData = ui.getInputValues();
    const movie = data.createMovie(movieData.title, movieData.length, movieData.genre);
    data.saveMovie(movie);
    console.log(movie);



    const formData = ui.getInputValues();
    if (!formData.title || !formData.length || !formData.genre) {
      ui.displayError('This is error message!');
      return
    }


    ui.renderAllMovies(data.movies);
    ui.resetForm();
    ui.displayingMoviesLength(data.calculateMovieLength());

  }

  function init() {
    addEventListenerToAddMovieButton();
    console.log('hi');
  }

  return {
    init
  }
})(uiModule, dataModule);



