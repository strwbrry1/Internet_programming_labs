document.addEventListener("DOMContentLoaded", function () {
  const movieForm = document.getElementById("movieForm");
  const movieList = document.getElementById("movieList");
  movieForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("movieTitle").value.trim();
    const description = document
      .getElementById("movieDescription")
      .value.trim();
    const imageFile = document.getElementById("movieImage").files[0];

    if (!title || !description || !imageFile) {
      alert("Пожалуйста, заполните все поля и выберите изображение.");
      return;
    }

    if (description.length < 30) {
      alert("Длина описания должна быть не менее 30 символов.");
      return;
    }

    const reader = new FileReader();

    reader.onload = function (event) {
      const imageSrc = event.target.result;

      const card = document.createElement("div");
      card.className = "col-sm-6 col-lg-4 mb-4"; // отступ снизу

      card.innerHTML = `<div class="card h-100">
            <img src="${imageSrc}" class="card-img-top" alt="${title}">
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <p class="card-text">${description}</p>
            </div>
          </div>`;

      movieList.appendChild(card);
      movieForm.reset();
    };

    reader.readAsDataURL(imageFile);
  });
});
