const BASE = "/api/directors";
export const fetchDirectors = () => fetch(`${BASE}`).then((r) => r.json());
export const fetchDirector = (id) =>
  fetch(`${BASE}/${id}`).then((r) => r.json());
export const createDirector = (m) =>
  fetch(BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(m),
  }).then((r) => r.json());
export const updateDirector = (id, m) =>
  fetch(`${BASE}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(m),
  }).then((r) => r.json());
export const deleteDirector = (id) =>
  fetch(`${BASE}/${id}`, { method: "DELETE" });
