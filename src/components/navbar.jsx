import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
      <div className="container">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <i className="bi bi-film fs-3 me-2"></i>
          <span className="fs-4">Онлайн-кинотеатр</span>
        </Link>

        {/* Кнопка-бургер */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Выпадающее меню */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/movies" className="nav-link text-white">Фильмы</Link>
            </li>
            <li className="nav-item">
              <Link to="/series" className="nav-link text-white">Сериалы</Link>
            </li>
            <li className="nav-item">
              <Link to="/library" className="nav-link text-white">Библиотека</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-white">
                <i className="bi bi-info-circle"></i> О нас
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
