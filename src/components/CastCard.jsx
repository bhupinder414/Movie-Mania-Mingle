import { Link } from "react-router-dom";
import { IMAGE_BASE_URL } from "../helpers/creds.env";
import defaultImg from "./../assets/default_person.jpg";

import Card from "./Card";

function CastCard({
  character,
  original_name,
  profile_path,
  known_for_department,
  episode_count,
  id,
}) {
  let imagePath = profile_path
    ? `${IMAGE_BASE_URL}/${profile_path}`
    : defaultImg;
  return (
    <Link to={`/person/${id}`}>
      <Card>
        <div
          style={{ backgroundImage: `url(${defaultImg})` }}
          className={`   bg-contain bg-center   bg-white/30 bg-blend-difference`}
        >
          <img
            loading="lazy"
            className="rounded-xl min-h-[86%] min-w-full"
            src={imagePath}
            alt={`image of ${original_name}`}
          />
        </div>
        <div className="font-bold text-xl text-center pt-2">
          {original_name}
        </div>
        <div className="text-md text-center">{character}</div>
        <div className="text-md text-center italic">{known_for_department}</div>
        {episode_count && (
          <div className="text-md text-center italic">
            {episode_count + " Episodes"}
          </div>
        )}
      </Card>
    </Link>
  );
}

export default CastCard;
