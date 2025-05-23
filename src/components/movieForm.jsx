import { useState, useEffect } from 'react';
import * as API from '../api/movies';
import * as genreAPI from '../api/genres';
import * as dirAPI from '../api/directors';

export default function MovieForm({ id, onSuccess }) {
  const [title, setTitle] = useState('');
  const [description, setDesc] = useState('');
  const [img, setImage] = useState('');
  const [genreId, setGenre] = useState('');
  const [directorId, setDirector] = useState('');
  const [genres, setGenres] = useState([]);
  const [dirs, setDirs] = useState([]);

  useEffect(() => {
    genreAPI.fetchGenres().then(setGenres);
    dirAPI.fetchDirectors().then(setDirs);

    if (id) {
      API.fetchMovie(id).then((m) => {
        setTitle(m.title);
        setDesc(m.description);
        setImage(m.img);
        setGenre(m.genreId);
        setDirector(m.directorId);
      });
    }
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();
    const movie = { title, description, img, genreId, directorId };
    if (id) await API.updateMovie(id, movie);
    else await API.createMovie(movie);
    onSuccess();
  }

  function handleFileChange(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onloadend = () => {
    setImage(reader.result); // base64 строка
  };
  reader.readAsDataURL(file); // читаем файл в base64
}

  return (
    <form onSubmit={handleSubmit} className="container py-4">
      <h2>{id ? 'Редактировать' : 'Добавить'} фильм</h2>

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
        ></textarea>
      </div>

      <div className="mb-3">
        <label className="form-label">Изображение (файл)</label>
        <input
            type="file"
            className="form-control"
            onChange={handleFileChange}
            accept="image/*"
        />
      </div>
      {img && (
        <div className="mb-3">
            <label className="form-label">Предпросмотр:</label><br />
            <img src={img} alt="preview" className="img-thumbnail" style={{ maxHeight: "200px" }} />
        </div>
      )}

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

      <button type="submit" className="btn btn-primary">
        {id ? 'Сохранить' : 'Создать'}
      </button>
    </form>
  );
}
