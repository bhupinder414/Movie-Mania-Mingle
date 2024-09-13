import { MOVIE_TYPE_CONTAINERS } from "../utils/constants";
import List from "./List";

const MainContent = () => {
  return (
    <>
      {MOVIE_TYPE_CONTAINERS.map((item) => (
        <List
          key={item.title}
          title={item.title}
          linkTo={item.linkTo}
          category={item.category}
          type={item.type}
        />
      ))}
    </>
  );
};

export default MainContent;
