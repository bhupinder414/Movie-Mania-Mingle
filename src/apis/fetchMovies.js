import { BASE_URL, API_KEY } from "../helpers/creds.env";

export async function fetchByCategory(
  type = "movie",
  category = "now_playing",
  page = 1
) {
  try {
    const response = await fetch(
      `${BASE_URL}/${type}/${category}?api_key=${API_KEY}&page=${page}`
    );
    const res = await response.json();
    return res;
  } catch (error) { /* empty */ }
}

export async function fetchDetail(type = "movie", id) {
  try {
    const response = await fetch(
      `${BASE_URL}/${type}/${id}?api_key=${API_KEY}`
    );
    const res = await response.json();
    return res;
  } catch (error) { }
}

export async function fetchMovieCasts(movieId) {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
    );
    const res = await response.json();
    return res;
  } catch (error) { }
}

export async function fetchSimilar(type = "movie", id) {
  try {
    const response = await fetch(
      `${BASE_URL}/${type}/${id}/similar?api_key=${API_KEY}`
    );
    const res = await response.json();
    return res;
  } catch (error) { }
}

export async function fetchUsingParams(type = "movie", queryParams = "") {
  let url = `${BASE_URL}/discover/${type}`;
  if (queryParams) {
    queryParams = queryParams.replace("genres", "with_genres");
    queryParams = queryParams.replace("runtime_from", "with_runtime.gte");
    queryParams = queryParams.replace("runtime_to", "with_runtime.lte");
    queryParams = queryParams.replace("vote_average_from", "vote_average.gte");
    queryParams = queryParams.replace("vote_average_to", "vote_average.lte");

    if (type === "movie") {
      queryParams = queryParams.replace("to_date", "primary_release_date.lte");
      queryParams = queryParams.replace(
        "from_date",
        "primary_release_date.gte"
      );
    } else {
      queryParams = queryParams.replace("to_date", "first_air_date.lte");
      queryParams = queryParams.replace("from_date", "first_air_date.gte");
    }
    url += `?${queryParams}&api_key=${API_KEY}`;
  } else {
    url += `?api_key=${API_KEY}`;
  }
  try {
    const response = await fetch(url);
    const res = await response.json();
    return res;
  } catch (error) { }
}

export async function fetchReviews(type = "movie", id) {
  try {
    const response = await fetch(
      `${BASE_URL}/${type}/${id}/reviews?api_key=${API_KEY}`
    );
    const res = await response.json();
    return res;
  } catch (error) { }
}

export async function searchData(type = "movie", query) {
  query = query.trim();
  try {
    const response = await fetch(
      `${BASE_URL}/search/${type}?api_key=${API_KEY}&query=${query}`
    );
    const res = await response.json();
    return res;
  } catch (error) { }
}

export async function personKnownFor(personId) {
  try {
    const response = await fetch(
      `${BASE_URL}/person/${personId}/combined_credits?api_key=${API_KEY}`
    );
    const res = await response.json();
    return res;
  } catch (error) { }
}

export async function fetchTVCredits(serialId) {
  try {
    const response = await fetch(
      `${BASE_URL}/tv/${serialId}/aggregate_credits?api_key=${API_KEY}`
    );
    const res = await response.json();
    return res;
  } catch (error) { }
}

export async function fetchVideos(type = "movie", showId) {
  try {
    const response = await fetch(
      `${BASE_URL}/${type}/${showId}/videos?api_key=${API_KEY}`
    );
    const res = await response.json();
    return res;
  } catch (error) { }
}

export async function fetchGenreNames(type = "movie") {
  try {
    const response = await fetch(
      `${BASE_URL}/genre/${type}/list?api_key=${API_KEY}`
    );
    const res = await response.json();
    return res;
  } catch (error) { }
}