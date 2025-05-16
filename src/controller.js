import { MovieModel } from "./model.js";
import { GenreModel } from "./genreModel.js";
import { DirectorModel } from "./directorModel.js";
import { MovieView } from "./view.js";

export const MovieController = {
  async init() {
    const [movies, genres, directors] = await Promise.all([
      MovieModel.getAll(),
      GenreModel.getAll(),
      DirectorModel.getAll(),
    ]);
    const extended = movies.map((movie) => ({
      ...movie,
      genre: genres.find((g) => g.id == movie.genreId),
      director: directors.find((d) => d.id == movie.directorId),
    }));
    MovieView.renderList(extended);
    MovieView.bindEvents({
      updateHandler: this.handleUpdate,
      deleteHandler: this.handleDelete});
  },

  async handleUpdate(id) {
    window.location.href = `form.html?id=${id}`;
  },
  async handleDelete(id) {
    if (confirm("Удалить фильм?")) {
      await MovieModel.delete(id);
      MovieController.init(); // Обновление списка
    }
  },
};
