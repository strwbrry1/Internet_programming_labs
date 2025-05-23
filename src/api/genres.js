const BASE = "/api/genres";
export const fetchGenres = () => fetch(`${BASE}`).then((r) => r.json());
export const fetchGenre = (id) => fetch(`${BASE}/${id}`).then((r) => r.json());
export const createGenre = (m) =>
  fetch(BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(m),
  }).then((r) => r.json());
export const updateGenre = (id, m) =>
  fetch(`${BASE}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(m),
  }).then((r) => r.json());
export const deleteGenre = (id) => fetch(`${BASE}/${id}`, { method: "DELETE" });
