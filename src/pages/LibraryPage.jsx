import React, { useState } from 'react';
import MovieList from '../components/movieList';
import MovieForm from '../components/movieForm';
import { Modal } from 'bootstrap';

import { useMovies } from '../hooks/useMovies';

export default function LibraryPage() {
  const { movies, remove, save } = useMovies();
  const [editingMovie, setEditingMovie] = useState(null);

  function handleEdit(movie) {
    setEditingMovie(movie);
    const modal = new Modal(document.getElementById('movieModal'));
    modal.show();
  }

  function handleSuccess() {
    const modal = Modal.getInstance(document.getElementById('movieModal'));
    modal.hide();
    setEditingMovie(null);
    
  }

  function showImageModal(src) {
  const img = document.getElementById("modalImage");
  img.src = src;

  const modal = new Modal(document.getElementById("imageModal"));
  modal.show();
  }

  return (
    <main className="flex-grow-1 pt-4">
      <div className="container my-5">
        <h2>Библиотека фильмов</h2>
        <button
          className="btn btn-success my-3"
          onClick={() => handleEdit(null)}
        >
          Добавить
        </button>

        <h3>Моя библиотека</h3>
        <div id="movieList" className="row g-4 mb-5 mt-1">
          <MovieList
            movies={movies}
            onEdit={handleEdit}
            onDelete={remove}
            onImageClick={showImageModal}
          />
        </div>
      </div>

      {/* форма */}
      <div className="modal fade" id="movieModal" tabIndex="-1">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-body">
              <MovieForm
                movie={editingMovie}
                onSuccess={handleSuccess}
                onSave={save}
              />
          </div>
        </div>
      </div>
      {/* форма картинки на карточке */}
      <div className="modal fade" id="imageModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-body p-0">
              <img
                id="modalImage"
                src={null}
                alt="movie"
                className="img-fluid w-100"
                style={{ maxHeight: '90vh', objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
