import { SHOWS_TYPE_CONTAINERS } from "../utils/constants";
import List from "./List";

const TVShows = () => {
  return (
    <>
      {SHOWS_TYPE_CONTAINERS.map((show) => (
        <List
          key={show.type}
          title={show.title}
          category={show.category}
          type={show.type}
          linkTo={show.linkTo}
        />
      ))}
    </>
  );
};

export default TVShows;
