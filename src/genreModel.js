const API = "http://localhost:3000";

export const GenreModel = {
  async getAll() {
    const res = await fetch(`${API}/genres`);
    return res.json();
  },
  async getById(id) {
    const res = await fetch(`${API}/genres/${id}`);
    return res.json();
  }
};
