type MusicData = {
  music: object[];
};
export const fetchById = async (url: string, id: string): Promise<MusicData> => {
  return await (await fetch(`${url}${id}`)).json();
};
export const fetchData = async (url: string): Promise<MusicData> => {
  return await (await fetch(url)).json();
};
