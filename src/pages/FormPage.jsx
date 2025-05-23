import { useParams, useNavigate } from 'react-router-dom';
import MovieForm from '../components/movieForm'; // отдельный компонент

export default function FormPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  return <MovieForm id={id} onSuccess={() => navigate('/library')} />;
}
