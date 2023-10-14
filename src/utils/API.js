import axios from "axios";

const BASE_URl = "https://api.themoviedb.org/3";

const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjA2ZmM0MThhOGYyNmIwNDRkOTUzNzgzYWE2NDFiOCIsInN1YiI6IjY1MjRlNDQ5NDQ3ZjljMDBjNmJjY2FlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4HOKlkh5lYRQZkSCOChHEPcAwAcymfgYk_IynNhbg3Q";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URl + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
