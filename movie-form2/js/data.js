const dataModule = (function () {
	const movies = [];
	allMoviesLength = 0;

	class Movie {
		constructor(title, length, genre) {
			this.title = title;
			this.length = length;
			this.genre = genre;
		}

		formatedString() {
			let string = '';
			let up = this.genre.toUpperCase();
			string += up[0];
			string += up[up.length - 1];

			return string;
		}

		getInfo() {
			return `Title: ${this.title}, Length: ${this.length}, Genre: ${this.formatedString()}`;
		}
	}


	function createMovie(title, length, genre) {
		return new Movie(title, length, genre);
	}

	function saveMovie(movie) {
		console.log(movie);
		movies.push(movie);
	}

	function calculateMovieLength() {
		let total = 0;
		for (let i = 0; i < movies.length; i++) {
			total += movies[i].length;
			allMoviesLength = total;
		}
		return allMoviesLength;

	}

	return {
		saveMovie,
		movies,
		createMovie,
		calculateMovieLength,
	}
})()

