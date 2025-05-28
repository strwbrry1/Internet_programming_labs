import { useState, useEffect } from 'react';
import * as API from '../api/movies';
import * as genreAPI from '../api/genres';
import * as dirAPI from '../api/directors';
import { Modal } from 'bootstrap';


export default function MovieForm({ movie, onSuccess, onSave }) {
  const [title, setTitle] = useState('');
  const [description, setDesc] = useState('');
  const [img, setImage] = useState('');
  const [genreId, setGenre] = useState('');
  const [directorId, setDirector] = useState('');
  const [genres, setGenres] = useState([]);
  const [dirs, setDirs] = useState([]);

  // Загружаем жанры, режиссёров и подставляем данные для редактирования
  useEffect(() => {
    console.log('Movie:', movie);
    genreAPI.fetchGenres().then(setGenres);
    dirAPI.fetchDirectors().then(setDirs);

    if (movie) {
      setTitle(movie.title);
      setDesc(movie.description);
      setImage(movie.img);
      setGenre(movie.genreId);
      setDirector(movie.directorId);
    } else {
      setTitle('');
      setDesc('');
      setImage('');
      setGenre('');
      setDirector('');
    }
  }, [movie]);

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const newMovie = {
      title,
      description,
      img,
      genreId,
      directorId,
    };

    // Передаём либо новый, либо обновляемый фильм
    await onSave(movie?.id ? { ...newMovie, id: movie.id } : newMovie);

    // Закрыть модальное окно вручную
    const modal = Modal.getInstance(document.getElementById('movieModal'));
    modal.hide();

    onSuccess();
  }

  return (
        <form className="modal-content" onSubmit={handleSubmit}>
          <div className="modal-header">
            <h5 className="modal-title">
              {movie ? 'Редактировать фильм' : 'Добавить фильм'}
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть" />
          </div>

          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">Название</label>
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Описание</label>
              <textarea
                className="form-control"
                value={description}
                onChange={(e) => setDesc(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Изображение (файл)</label>
              <input
                type="file"
                className="form-control"
                accept="image/*"
                onChange={handleFileChange}
              />
              {img && (
                <div className="mt-2">
                  <label className="form-label">Предпросмотр:</label><br />
                  <img src={img} alt="preview" className="img-thumbnail" style={{ maxHeight: '200px' }} />
                </div>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Жанр</label>
              <select
                className="form-select"
                value={genreId}
                onChange={(e) => setGenre(Number(e.target.value))}
                required
              >
                <option value="">-- выбрать жанр --</option>
                {genres.map((g) => (
                  <option key={g.id} value={g.id}>
                    {g.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Режиссер</label>
              <select
                className="form-select"
                value={directorId}
                onChange={(e) => setDirector(Number(e.target.value))}
                required
              >
                <option value="">-- выбрать режиссера --</option>
                {dirs.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Отмена
            </button>
            <button type="submit" className="btn btn-primary">
              {movie ? 'Сохранить' : 'Создать'}
            </button>
          </div>
        </form>
  );
}
