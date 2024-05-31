import SearchResultMovie from "./SearchResultMovie";
import SearchResultPersons from "./SearchResultPersons";
import SearchResultShows from "./SearchResultShows";

function SearchResultContainer({ data: { results }, activeId }) {
  return (
    <div className="">
      {activeId === "movies" &&
        (results.length > 0 ? (
          results.map((item) => (
            <SearchResultMovie key={item.id} activeId={activeId} item={item} />
          ))
        ) : (
          <p className="m-4 text-2xl">No Movie Found.</p>
        ))}
      {activeId === "shows" &&
        (results.length > 0 ? (
          results.map((item) => (
            <SearchResultShows key={item.id} activeId={activeId} item={item} />
          ))
        ) : (
          <p className="m-4 text-2xl">No TV Show Found.</p>
        ))}
      {activeId === "persons" &&
        (results.length > 0 ? (
          results.map((item) => (
            <SearchResultPersons
              key={item.id}
              activeId={activeId}
              item={item}
            />
          ))
        ) : (
          <p className="m-4 text-2xl">No Person Found.</p>
        ))}
    </div>
  );
}

export default SearchResultContainer;
