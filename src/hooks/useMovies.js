import { useState, useEffect } from "react";
import * as API from "../api/movies";
import * as GenreAPI from "../api/genres";
import * as DirectorAPI from "../api/directors";

export function useMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const [movies, genres, directors] = await Promise.all([
      API.fetchMovies(),
      GenreAPI.fetchGenres(),
      DirectorAPI.fetchDirectors(),
    ]);

    const extended = movies.map((movie) => ({
      ...movie,
      genre: genres.find((g) => g.id == movie.genreId),
      director: directors.find((d) => d.id == movie.directorId),
    }));

    setMovies(extended);
  }

  async function remove(id) {
    await API.deleteMovie(id);
    await load();
  }

  async function save(movie) {
    if (movie.id) await API.updateMovie(movie.id, movie);
    else await API.createMovie(movie);
    await load();
  }

  return { movies, remove, save };
}
