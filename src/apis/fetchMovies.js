import { MOVIE_TYPE_KEY } from "../utils/constants";

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const VITE_API_KEY = import.meta.env.VITE_API_KEY;

export const fetchByCategory = async (
  type = MOVIE_TYPE_KEY,
  category = "now_playing",
  page = 1
) => {
  try {
    const response = await fetch(
      `${VITE_API_BASE_URL}/${type}/${category}?api_key=${VITE_API_KEY}&page=${page}`
    );
    const res = await response.json();
    return res;
  } catch (error) {
    /* empty */
  }
};

export const fetchDetail = async (type = MOVIE_TYPE_KEY, id) => {
  try {
    const response = await fetch(
      `${VITE_API_BASE_URL}/${type}/${id}?api_key=${VITE_API_KEY}`
    );
    const res = await response.json();
    return res;
  } catch (error) {}
};

export const fetchMovieCasts = async (movieId) => {
  try {
    const response = await fetch(
      `${VITE_API_BASE_URL}/movie/${movieId}/credits?api_key=${VITE_API_KEY}`
    );
    const res = await response.json();
    return res;
  } catch (error) {}
};

export const fetchSimilar = async (type = MOVIE_TYPE_KEY, id) => {
  try {
    const response = await fetch(
      `${VITE_API_BASE_URL}/${type}/${id}/similar?api_key=${VITE_API_KEY}`
    );
    const res = await response.json();
    return res;
  } catch (error) {}
};

export const fetchUsingParams = async (type = MOVIE_TYPE_KEY, queryParams = "") => {
  let url = `${VITE_API_BASE_URL}/discover/${type}`;
  if (queryParams) {
    queryParams = queryParams.replace("genres", "with_genres");
    queryParams = queryParams.replace("runtime_from", "with_runtime.gte");
    queryParams = queryParams.replace("runtime_to", "with_runtime.lte");
    queryParams = queryParams.replace("vote_average_from", "vote_average.gte");
    queryParams = queryParams.replace("vote_average_to", "vote_average.lte");

    if (type === MOVIE_TYPE_KEY) {
      queryParams = queryParams.replace("to_date", "primary_release_date.lte");
      queryParams = queryParams.replace(
        "from_date",
        "primary_release_date.gte"
      );
    } else {
      queryParams = queryParams.replace("to_date", "first_air_date.lte");
      queryParams = queryParams.replace("from_date", "first_air_date.gte");
    }
    url += `?${queryParams}&api_key=${VITE_API_KEY}`;
  } else {
    url += `?api_key=${VITE_API_KEY}`;
  }
  try {
    const response = await fetch(url);
    const res = await response.json();
    return res;
  } catch (error) {}
};

export const fetchReviews = async (type = MOVIE_TYPE_KEY, id) => {
  try {
    const response = await fetch(
      `${VITE_API_BASE_URL}/${type}/${id}/reviews?api_key=${VITE_API_KEY}`
    );
    const res = await response.json();
    return res;
  } catch (error) {}
};

export const searchData = async (type = MOVIE_TYPE_KEY, query) => {
  query = query.trim();
  try {
    const response = await fetch(
      `${VITE_API_BASE_URL}/search/${type}?api_key=${VITE_API_KEY}&query=${query}`
    );
    const res = await response.json();
    return res;
  } catch (error) {}
};

export const personKnownFor = async (personId) => {
  try {
    const response = await fetch(
      `${VITE_API_BASE_URL}/person/${personId}/combined_credits?api_key=${VITE_API_KEY}`
    );
    const res = await response.json();
    return res;
  } catch (error) {}
};

export const fetchTVCredits = async (serialId) => {
  try {
    const response = await fetch(
      `${VITE_API_BASE_URL}/tv/${serialId}/aggregate_credits?api_key=${VITE_API_KEY}`
    );
    const res = await response.json();
    return res;
  } catch (error) {}
};

export const fetchVideos = async (type = MOVIE_TYPE_KEY, showId) => {
  try {
    const response = await fetch(
      `${VITE_API_BASE_URL}/${type}/${showId}/videos?api_key=${VITE_API_KEY}`
    );
    const res = await response.json();
    return res;
  } catch (error) {}
};

export const fetchGenreNames = async (type = MOVIE_TYPE_KEY) => {
  try {
    const response = await fetch(
      `${VITE_API_BASE_URL}/genre/${type}/list?api_key=${VITE_API_KEY}`
    );
    const res = await response.json();
    return res;
  } catch (error) {}
};

export const fetchSeasonDetail = async (showId, seasonNumber) => {
  try {
    const response = await fetch(
      `${VITE_API_BASE_URL}/tv/${showId}/season/${seasonNumber}?api_key=${VITE_API_KEY}`
    );
    const res = await response.json();
    return res;
  } catch (error) {}
};

