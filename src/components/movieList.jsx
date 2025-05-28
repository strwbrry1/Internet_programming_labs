import MovieCard from './movieCard';
export default function MovieList({ movies, onEdit, onDelete, onImageClick }) {
  return (
    <div className="row g-4">
      {movies.map(m => (
        <div key={m.id} className="col-sm-6 col-lg-4">
          <MovieCard movie={m} onEdit={()=>onEdit(m)} onDelete={()=>onDelete(m.id)} onImageClick={() => onImageClick(m.img)} />
        </div>
      ))}
    </div>
  );
}
