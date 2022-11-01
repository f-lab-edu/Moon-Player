export const fetchById = async (id) => {
  return await (await fetch(`http://localhost:4000/api/music/genre/${id}`)).json();
};
export const fetchData = async () => {
  return await (await fetch('http://localhost:4000/api/music/genre/')).json();
};
