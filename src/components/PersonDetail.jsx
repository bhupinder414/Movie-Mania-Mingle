import { useParams } from "react-router-dom";
import PersonKnownFor from "./PersonKnownFor";
import { formatDate } from "../utils/formatFunctions";
import {
  genders,
  KNOWN_FOR_LENGTH,
  MOVIE_SHIMMER_CONTAINER_LENGTH,
  PERSON_TYPE_KEY,
} from "../utils/constants";
import useKnownFor from "../hooks/useKnownFor";
import useDetails from "../hooks/useDetails";
import ShimmerContainer from "./ShimmerContainer";
import PersonDetailShimmer from "./PersonDetailShimmer";
import Image from "./Image";

const PersonDetail = () => {
  const { personID } = useParams();
  const casts = useKnownFor(personID);
  const details = useDetails(PERSON_TYPE_KEY, personID);

  const {
    name,
    profile_path,
    biography,
    known_for_department,
    gender,
    birthday,
    place_of_birth,
  } = details || {};
  const cast = casts?.cast;

  return (
    <div className=" overflow-x-auto">
      {!details ? (
        <PersonDetailShimmer />
      ) : (
        <div className=" flow-root p-8 md:pl-20 md:pr-20 gap-4 bg-gray-800/30 items-center text-white ">
          <div className="w-full sm:w-5/12 h-96 lg:w-3/12 float-left mx-auto sm:mr-4 mb-4 bg-gray-100 rounded-xl">
            <Image
              type={PERSON_TYPE_KEY}
              path={profile_path}
              alt={`image of ${name}`}
            />
          </div>
          <div>
            <div className="text-center sm:!text-left  font-bold text-3xl    sm:text-4xl ">
              {name}
            </div>
            {biography && (
              <div className="mt-6 sm:mt-3 font-semibold  text-center sm:!text-left  text-2xl">
                Biography
              </div>
            )}
            <div className="mt-4 sm:mt-2">{biography}</div>
            <div className="mt-6 font-semibold text-left text-2xl">
              Personal Info
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-8  mt-2">
              <div className="grid grid-cols-2  sm:grid-cols-1   md:gap-1 ">
                <span className="colspan-1 font-semibold text-lg">
                  Known For
                </span>
                <span className="colspan-1 italic">{known_for_department}</span>
              </div>
              <div className="grid grid-cols-2  sm:grid-cols-1   md:gap-1">
                <span className="font-semibold text-lg">Gender</span>
                <span className="italic">{genders[gender]}</span>
              </div>
              <div className="grid grid-cols-2  sm:grid-cols-1   md:gap-1">
                <span className="font-semibold text-lg">Birthday</span>
                <span className="italic">{formatDate(birthday)}</span>
              </div>
              <div className="grid grid-cols-2  sm:grid-cols-1   md:gap-1">
                <span className="font-semibold text-lg">Place of Birth</span>
                <span className="italic">{place_of_birth}</span>
              </div>
            </div>
          </div>
        </div>
      )}
      {!cast ? (
        <div className="md:pl-20 md:pr-20 p-4 mb-4 mt-4 overflow-x-auto ">
          <div className="flex gap-2 flex-nowrap overflow-x-auto">
            <ShimmerContainer length={MOVIE_SHIMMER_CONTAINER_LENGTH} />
          </div>
        </div>
      ) : (
        <div className="clear-left">
          <PersonKnownFor casts={cast?.slice(0, KNOWN_FOR_LENGTH)} />
        </div>
      )}
    </div>
  );
};

export default PersonDetail;
