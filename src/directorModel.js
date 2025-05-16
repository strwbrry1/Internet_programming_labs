const API = "http://localhost:3000";

export const DirectorModel = {
  async getAll() {
    const res = await fetch(`${API}/directors`);
    return res.json();
  },
  async getById(id) {
    const res = await fetch(`${API}/directors/${id}`);
    return res.json();
  }
};
