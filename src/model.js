const API = "http://localhost:3000";

export const MovieModel = {
  async getAll() {
    const res = await fetch(`${API}/movies`);
    return res.json();
  },
  async getById(id) {
    const res = await fetch(`${API}/movies/${id}`);
    return res.json();
  },
  async create(movie) {
    const res = await fetch(`${API}/movies`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movie),
    });
    return res.json();
  },
  async update(id, movie) {
    const res = await fetch(`${API}/movies/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movie),
    });
    return res.json();
  },
  async delete(id) {
    await fetch(`${API}/movies/${id}`, { method: "DELETE" });
  },
};
