const uiModule = (function () {

	let $titleInput = document.querySelector('.title');
	let $lengthInput = document.querySelector('.length');
	let $genreInput = document.querySelector('.genre');
	let $movieList = document.querySelector('.movie-list ul');
	let $messageError = document.querySelector('.movie-error');
	let $totalLength = document.querySelector('.total-movie-length');

	function getInputValues() {
		const title = $titleInput.value;
		const length = parseInt($lengthInput.value);
		const genre = $genreInput.value;

		return {
			title,
			length,
			genre
		}

	}

	function resetForm() {
		$titleInput.value = '';
		$lengthInput.value = '';
		$genreInput.value = '';
		$messageError.value = '';
	}

	function renderAllMovies(allMovies) {
		let moviesItems = '';
		allMovies.forEach(function (movie) {
			moviesItems += `<li>${movie.getInfo()}</li>`;
		});
		console.log(moviesItems);
		$movieList.innerHTML = moviesItems;
	}

	function displayError(msg) {
		$messageError.textContent = msg;

	}

	function hideError() {
		$messageError.textContent = '';
	}

	function displayingMoviesLength(movieLength) {
		$totalLength.textContent = "All movies length:" + movieLength;
	}

	return {
		getInputValues,
		resetForm,
		renderAllMovies,
		displayError,
		hideError,
		displayingMoviesLength,
	}

})();

