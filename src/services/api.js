const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
  },
};

const fetchData = async (link) => {
  try {
    const response = await fetch(link, options).then((res) => res.json());
    return response;
  } catch (error) {
    console.error(error.message);
  }
};

export const getAllAnime = async (page = 1, size = 30) => {
  const response = await fetchData(
    `https://anime-db.p.rapidapi.com/anime?page=${page}&size=${size}`
  );
  return response.data;
};

export const getSpecificAnime = async (animeId) => {
  const response = await fetchData(
    `https://anime-db.p.rapidapi.com/anime/by-id/${animeId}`
  );
  return response;
};
