import React from "react";

export default function HomePage() {
  return (
    <>
      <main className="flex-grow-1 pt-4">
        <div className="container my-5">
          <h2>Добро пожаловать в наш онлайн-кинотеатр!</h2>
          <p>
            Здесь вы найдете <strong>только</strong> лучшие фильмы и сериалы
          </p>

          <div className="row g-4">
            <div className="col-sm-6 col-lg-4">
              <div className="card h-100">
                <img
                  src="img/movie-posters/marsianin.jpg"
                  className="card-img-top"
                  alt="Марсианин"
                />
                <div className="card-body">
                  <h5 className="card-title">Марсианин (2015)</h5>
                  <p className="card-text">Выживание на Марсе.</p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="card h-100">
                <img
                  src="img/movie-posters/brat.jpg"
                  className="card-img-top"
                  alt="Брат"
                />
                <div className="card-body">
                  <h5 className="card-title">Брат (2009)</h5>
                  <p className="card-text">Выживание в Москве.</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </main>
    </>
  );
}
