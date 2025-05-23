export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-auto">
      <div className="container py-3 d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div>
          <p className="mb-1">
            <i className="bi bi-telephone-fill me-1"></i>
            +7&nbsp;123&nbsp;456&nbsp;7890
          </p>
          <p className="mb-0">
            <i className="bi bi-geo-alt-fill me-1"></i>
            г. Москва, ул. Примерная, 1
          </p>
        </div>
        <div className="mt-2 mt-md-0">
          <a href="#" className="text-white me-3">
            <i className="bi bi-telegram fs-4"></i>
          </a>
          <a href="#" className="text-white">
            <i className="bi bi-youtube fs-4"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
