import { Link } from "react-router-dom";
import Card from "./Card";
import Image from "./Image";
import { PERSON_TYPE_KEY } from "../utils/constants";

const CastCard = ({
  character,
  original_name,
  profile_path,
  known_for_department,
  episode_count,
  id,
}) => {
  return (
    <Link to={`/person/${id}`}>
      <Card>
        <div className={`w-full h-80   bg-gray-100 rounded-xl`}>
          <Image
            type={PERSON_TYPE_KEY}
            path={profile_path}
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
};

export default CastCard;
