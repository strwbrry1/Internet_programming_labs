export const MovieView = {
  renderList(movies) {
    console.log("Movies:", movies);
    const container = document.getElementById("movieList");
    container.innerHTML = "";
    movies.forEach((movie) => {
      const card = document.createElement("div");
      card.className = "col-md-4";
      card.innerHTML = `
          <div class="card h-100">
            <img src="${movie.img}" class="card-img-top" alt="${movie.title}">
            <div class="card-body">
              <h5 class="card-title">${movie.title}</h5>
              <p class="card-text">${movie.description || "не найден"}</p>
              <p class="card-text">Жанр: ${movie.genre?.name || "не найден"}</p>
              <p class="card-text">Режиссер: <em>${movie.director?.name || "не найден"}</em></p>
              <button class="btn btn-sm btn-warning update-btn" data-id="${movie.id}">Обновить</button>
              <button class="btn btn-sm btn-danger delete-btn" data-id="${movie.id}">Удалить</button>
            </div>
          </div>
        `;
      container.appendChild(card);
    });
  },
  bindEvents({ updateHandler, deleteHandler}) {
    document.querySelectorAll(".update-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        updateHandler(id);
      });
    }),
      document.querySelectorAll(".delete-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          const id = btn.dataset.id;
          deleteHandler(id);
        });
      });
  },
};
