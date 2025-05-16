import { MovieModel } from "./model.js";

const genreSelect = document.getElementById("genreId");
const directorSelect = document.getElementById("directorId");
const form = document.getElementById("movieForm");
const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const imageInput = document.getElementById("movieImage");

const params = new URLSearchParams(window.location.search);
var movieId = null;
if (params.has("id")) {
  movieId = params.get("id").trim();
}

async function loadOptions() {
  const genres = await fetch("http://localhost:3000/genres").then((res) =>
    res.json()
  );
  const directors = await fetch("http://localhost:3000/directors").then((res) =>
    res.json()
  );

  genres.forEach((g) => {
    const option = document.createElement("option");
    option.value = g.id;
    option.textContent = g.name;
    genreSelect.appendChild(option);
  });

  directors.forEach((d) => {
    const option = document.createElement("option");
    option.value = d.id;
    option.textContent = d.name;
    directorSelect.appendChild(option);
  });
}


async function loadMovie() {
  if (!movieId) return;

  const movie = await MovieModel.getById(movieId);

  titleInput.value = movie.title;
  descriptionInput.value = movie.description;
  genreSelect.value = movie.genreId;
  directorSelect.value = movie.directorId;

}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = titleInput.value.trim();
  const description = descriptionInput.value.trim();
  const genreId = Number(genreSelect.value);
  const directorId = Number(directorSelect.value);
  const imageFile = imageInput.files[0];

  if (!title || !description || !genreId || !directorId) {
    alert("Пожалуйста, заполните все поля.");
    return;
  }

  if (imageFile) {
    const reader = new FileReader();
    reader.onload = async function (event) {
      const imageBase64 = event.target.result;
      await saveMovie(imageBase64);
    };
    reader.readAsDataURL(imageFile);
  } else {
    const oldMovie = movieId ? await MovieModel.getById(movieId) : {};
    await saveMovie(oldMovie.img || "");
  }
});

async function saveMovie(imageBase64) {
  const movie = {
    title: titleInput.value.trim(),
    description: descriptionInput.value.trim(),
    img: imageBase64,
    genreId: Number(genreSelect.value),
    directorId: Number(directorSelect.value),
  };

  if (movieId) {
    await MovieModel.update(movieId, movie);
  } else {
    await MovieModel.create(movie);
  }

  window.location.href = "library.html";
}

await loadOptions();
await loadMovie();
