import React from 'react';
import { useNavigate } from 'react-router-dom';
import MovieList from '../components/movieList';
import { useMovies } from '../hooks/useMovies';

export default function LibraryPage() {
  const { movies, remove } = useMovies();
  const navigate = useNavigate();

  return (
    <main className="flex-grow-1 pt-4">
      <div className="container my-5">
        <h2>Добавить фильм в библиотеку</h2>
          <button
            className="btn btn-success my-3"
            onClick={() => navigate('/form')}>Добавить</button>

        <div id="movieList" className="row g-4 mb-5 mt-1">
          <h3>Моя библиотека</h3>
          <MovieList
            movies={movies}
            onEdit={(m) => navigate(`/form/${m.id}`)}
            onDelete={remove}
          />
        </div>
      </div>
    </main>
  );
}
