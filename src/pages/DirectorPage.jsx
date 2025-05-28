import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMovies } from "../hooks/useMovies";
import MovieList from "../components/movieList";
import * as dirAPI from "../api/directors";

export default function DirectorPage() {
  const { id } = useParams();
  const { movies } = useMovies();
  const [director, setDirector] = useState(null);

  useEffect(() => {
    dirAPI.fetchDirector(id).then(setDirector);
  }, [id]);

  const filtered = movies.filter(m => m.director?.id == id);

  return (
    <div className="container py-4">
      <div className="mb-4">
        <h2>Фильмы режиссёра: {director?.name || "..."}</h2>
      </div>
      
      <MovieList movies={filtered} />
    </div>
  );
}
