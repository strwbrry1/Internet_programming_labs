import { Link } from "react-router-dom";

export default function MovieCard({movie, onEdit, onDelete, onImageClick}) {
  return (
    <div className="card h-100">
      <img
        src={movie.img}
        className="card-img-top"
        alt={movie.title}
        style={{ cursor: 'pointer' }}
        onClick={onImageClick}
      />
      <div className="card-body">
        <h5>{movie.title}</h5>
        <h6>{movie.description}</h6>
        <p>Жанр: <Link to={`/genres/${movie.genre?.id}`}>{movie.genre?.name}</Link></p>
        <p><em>Режиссер: <Link to={`/directors/${movie.director?.id}`}>{movie.director?.name}</Link></em></p>
        <button className="btn btn-warning me-2" onClick={onEdit}>Редактировать</button>
        <button className="btn btn-danger" onClick={onDelete}>Удалить</button>
      </div>
    </div>
  );
}
