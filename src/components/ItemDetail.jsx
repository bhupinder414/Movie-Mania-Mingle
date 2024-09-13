import { useParams } from "react-router-dom";
import useDetails from "../hooks/useDetails";
import useCasts from "../hooks/useCasts";
import ItemShowDetailed from "./ItemShowDetailed";
import LatestSeason from "./LatestSeason";
import BriefReviews from "./BriefReviews";
import VideoContainer from "./VideoContainer";
import CastContainer from "./CastContainer";
import Similar from "./Similar";
import {
  ITEMS_PER_PAGE,
  MOVIE_SHOW_LABEL,
  SHOW_TYPE_KEY,
  SIMILAR_SHOW_LABEL,
} from "../utils/constants";

const ItemDetail = ({ id, type }) => {
  const { [id]: dynamicId } = useParams();
  const show = useDetails(type, dynamicId);
  const genres = show?.genres;
  const { crew, cast } = useCasts(type, dynamicId);
  const show_genres = genres?.map((genre) => genre.id).join(",");
  return (
    <>
      <ItemShowDetailed
        id={id}
        genres={genres}
        crew={type === SHOW_TYPE_KEY ? show?.created_by : crew}
        item={show}
        type={type}
      />
      {type === SHOW_TYPE_KEY && (
        <LatestSeason
          seasons={show?.seasons}
          name={show?.name}
          poster_path={show?.poster_path}
          first_air_date={show?.first_air_date}
        />
      )}
      <BriefReviews type={type} id={id} />
      <VideoContainer type={type} id={id} />
      <CastContainer cast={cast?.slice(0, ITEMS_PER_PAGE)} label="Cast" />
      <Similar
        linkTo={`../all?genres=${show_genres}`}
        type={type}
        id={id}
        label={`${
          type === SHOW_TYPE_KEY ? SIMILAR_SHOW_LABEL : MOVIE_SHOW_LABEL
        } `}
      />
    </>
  );
};

export default ItemDetail;
