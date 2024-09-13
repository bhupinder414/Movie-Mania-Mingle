import { fetchByCategory } from "../apis/fetchMovies";
import { DEFAULT_PAGE, PAGE_KEY } from "./constants";

export const loader =
  (type, category) =>
  async ({ request }) => {
    let search = new URLSearchParams(request.url.split("?")[1]);
    const page = search.get(PAGE_KEY) || DEFAULT_PAGE;
    return await fetchByCategory(type, category, page);
  };
