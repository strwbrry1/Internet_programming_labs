import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMovies } from "../hooks/useMovies";
import MovieList from "../components/movieList";
import * as genreAPI from "../api/genres";

export default function GenrePage() {
  const { id } = useParams();
  const { movies } = useMovies();
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    genreAPI.fetchGenre(id).then(setGenre);
  }, [id]);

  const filtered = movies.filter(m => m.genre?.id == id);

  return (
    <div className="container py-4">
        <div className="mb-5">
            <h2>Фильмы жанра: {genre?.name || "..."}</h2>
        </div>
      
      <MovieList movies={filtered} />
    </div>
  );
}
