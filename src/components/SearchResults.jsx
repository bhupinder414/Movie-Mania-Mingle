import { useSearchParams } from "react-router-dom";
import SearchResultHeader from "./SearchResultHeader";
import { useState } from "react";
import SearchResultContainer from "./SearchResultContainer";
import Pagination from "./Pagination";
import useSearch from "../hooks/useSearch";
import SearchShimmerContainer from "./SearchShimmerContainer";
import {
  DEFAULT_PAGE,
  PAGE_KEY,
  QUERY_KEY,
  SEARCH_MOVIES_KEY,
  SEARCH_MOVIES_LABEL,
  SEARCH_PERSONS_KEY,
  SEARCH_PERSONS_LABEL,
  SEARCH_SHOWS_KEY,
  SEARCH_SHOWS_LABEL,
} from "../utils/constants";

const SearchResults = () => {
  const [activeId, setActiveId] = useState(SEARCH_MOVIES_KEY);
  const [searchParams] = useSearchParams();
  const page = searchParams.get(PAGE_KEY) || DEFAULT_PAGE;
  let searchQuery = searchParams.get(QUERY_KEY) || "";
  let query = searchQuery;
  query += "&" + PAGE_KEY + "=" + page;
  const { data, loading } = useSearch(query);
  const activeItems = data[activeId];

  if (loading || !activeItems) {
    return <SearchShimmerContainer />;
  }
  const { movies, shows, persons } = data;
  let searchArray = [
    {
      id: SEARCH_MOVIES_KEY,
      title: SEARCH_MOVIES_LABEL,
      total: movies.total_results,
    },
    {
      id: SEARCH_SHOWS_KEY,
      title: SEARCH_SHOWS_LABEL,
      total: shows.total_results,
    },
    {
      id: SEARCH_PERSONS_KEY,
      title: SEARCH_PERSONS_LABEL,
      total: persons.total_results,
    },
  ];

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
};

export default SearchResults;
