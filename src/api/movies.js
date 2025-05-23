const BASE = "/api/movies";

export const fetchMovies = () =>
  fetch(`${BASE}`).then((r) => r.json());

export const fetchMovie = (id) => fetch(`${BASE}/${id}`).then((r) => r.json());

export const createMovie = (m) =>
  fetch(BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(m),
  }).then((r) => r.json());

export const updateMovie = (id, m) =>
  fetch(`${BASE}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(m),
  }).then((r) => r.json());

export const deleteMovie = (id) => fetch(`${BASE}/${id}`, { method: "DELETE" });
