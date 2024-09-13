import {
  NO_SEARCH_RESULT_MOVIE,
  NO_SEARCH_RESULT_PERSON,
  NO_SEARCH_RESULT_TV,
  SEARCH_MOVIES_KEY,
  SEARCH_PERSONS_KEY,
  SEARCH_SHOWS_KEY,
} from "../utils/constants";
import SearchResultMovie from "./SearchResultMovie";
import SearchResultPersons from "./SearchResultPersons";
import SearchResultShows from "./SearchResultShows";

const SearchResultContainer = ({ data: { results }, activeId }) => {
  return (
    <div className="lg:w-[65%]">
      {activeId === SEARCH_MOVIES_KEY &&
        (results.length > 0 ? (
          results.map((item) => <SearchResultMovie key={item.id} item={item} />)
        ) : (
          <p className="m-4 text-2xl">{NO_SEARCH_RESULT_MOVIE}</p>
        ))}
      {activeId === SEARCH_SHOWS_KEY &&
        (results.length > 0 ? (
          results.map((item) => (
            <SearchResultShows key={item.id} activeId={activeId} item={item} />
          ))
        ) : (
          <p className="m-4 text-2xl">{NO_SEARCH_RESULT_TV}</p>
        ))}
      {activeId === SEARCH_PERSONS_KEY &&
        (results.length > 0 ? (
          results.map((item) => (
            <SearchResultPersons
              key={item.id}
              activeId={activeId}
              item={item}
            />
          ))
        ) : (
          <p className="m-4 text-2xl">{NO_SEARCH_RESULT_PERSON}</p>
        ))}
    </div>
  );
};

export default SearchResultContainer;
