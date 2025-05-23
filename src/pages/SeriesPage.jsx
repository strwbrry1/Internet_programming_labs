export default function SeriesPage() {
  return (
    <>
    <main className="flex-grow-1 pt-4">
      

      <div className="container my-5">
        <div className="mb-4">
            <h2>Сериалы</h2>
        </div>
        <div className="row g-4">
          <div className="col-sm-6 col-lg-4">
            <div className="card h-100">
              <img
                src="img/movie-posters/brba.jpg"
                className="card-img-top"
                alt="Во все тяжкие"
              />
              <div className="card-body">
                <h5 className="card-title">Во все тяжкие (2010)</h5>
                <p className="card-text">Выживание в Альбукерке</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}