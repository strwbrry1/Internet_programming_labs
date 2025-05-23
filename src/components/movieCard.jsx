export default function MovieCard({movie, onEdit, onDelete}) {
  return (
    <div className="card h-100">
      <img src={movie.img} className="card-img-top" alt={movie.title}/>
      <div className="card-body">
        <h5>{movie.title}</h5>
        <h6>{movie.description}</h6>
        <p>{movie.genre?.name || "Не найден"}</p>
        <p><em>{movie.director?.name || "Не найден"}</em></p>
        <button className="btn btn-warning me-2" onClick={onEdit}>Редактировать</button>
        <button className="btn btn-danger" onClick={onDelete}>Удалить</button>
      </div>
    </div>
  );
}
