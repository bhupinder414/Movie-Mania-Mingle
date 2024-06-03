import {
  useLoaderData,
  useNavigation,
  useSearchParams,
} from "react-router-dom";
import { searchData } from "../apis/fetchMovies";
import SearchResultHeader from "./SearchResultHeader";
import { useState } from "react";
import SearchResultContainer from "./SearchResultContainer";
import Pagination from "./Pagination";
import LoaderFullScreen from "./LoaderFullScreen";

function SearchResults() {
  const [params] = useSearchParams();
  const searchQuery = params.get("query") || "";
  const [activeId, setActiveId] = useState("movies");
  const data = useLoaderData();
  const { movies, shows, persons } = data;
  let searchArray = [];
  searchArray.push({
    id: "movies",
    title: "Movies",
    total: movies.total_results,
  });
  searchArray.push({
    id: "shows",
    title: "TV Shows",
    total: shows.total_results,
  });
  searchArray.push({
    id: "persons",
    title: "Persons",
    total: persons.total_results,
  });

  const activeItems = data[activeId];

  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;

  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <LoaderFullScreen />;
  }

  return (
    <div className="sm:ml-8 m-4 sm:mr-8">
      <div className="flex flex-col sm:flex-row sm:items-center">
        <div className="text-xl font-bold italic m-4 ">
          Search Results for {searchQuery}:
        </div>
        <SearchResultHeader
          results={searchArray}
          activeId={activeId}
          setActiveId={setActiveId}
        />
      </div>
      <SearchResultContainer data={activeItems} activeId={activeId} />
      {+activeItems.total_pages > 1 && (
        <Pagination totalPages={+activeItems.total_pages} currentPage={page} />
      )}
    </div>
  );
}

export default SearchResults;

export async function loader({ request, params }) {
  let searchResult = new URLSearchParams(request.url.split("?")[1]);
  let query = searchResult.get("query") || "";
  const page = searchResult.get("page") || 1;
  query += "&page=" + page;
  const res = {};
  res["movies"] = await searchData("movie", query);
  res["shows"] = await searchData("tv", query);
  res["persons"] = await searchData("person", query);

  return res;
}
