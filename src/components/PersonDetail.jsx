import { useLoaderData } from "react-router-dom";
import { fetchDetail, personKnownFor } from "../apis/fetchMovies";
import defaultImg from "./../assets/default_person.jpg";
import PersonKnownFor from "./PersonKnownFor";
import { formatDate } from "../helpers/formatFunctions";

const VITE_IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

function PersonDetail() {
  const {
    detail: {
      name,
      profile_path,
      biography,
      known_for_department,
      gender,
      birthday,
      place_of_birth,
    },
    known_for: { cast },
  } = useLoaderData();
  let imagePath = profile_path
    ? `${VITE_IMAGE_BASE_URL}/${profile_path}`
    : defaultImg;

  const genders = [];
  genders[0] = "Not Set/Not Specified";
  genders[1] = "Female";
  genders[2] = "Male";
  genders[3] = "Non-binary";

  return (
    <div className=" overflow-x-auto">
      <div className="flex flex-col sm:flex-row p-8 md:pl-20 md:pr-20 gap-4 bg-gray-800/30 text-white ">
        <div className=" sm:min-w-[300px] sm:h-[400px]">
          <img
            className=" rounded-xl object-cover w-full h-full"
            src={imagePath}
            alt={`image of ${name}`}
          />
        </div>
        <div>
          <div className="font-bold text-3xl text-center sm:text-left  sm:text-5xl ">
            {name}
          </div>
          {biography && (
            <div className="mt-6 font-semibold text-center sm:text-left text-2xl">
              Biography
            </div>
          )}
          <div className="mt-4">{biography}</div>
          <div className="mt-6 font-semibold text-center sm:text-left text-2xl">
            Personal Info
          </div>
          <div className="flex flex-col md:flex-row md:gap-12 mt-2">
            <div className="grid grid-cols-2 md:flex md:flex-row  md:gap-0 md:flex-col">
              <span className="colspan-1 font-semibold text-lg">Known For</span>
              <span className="colspan-1 italic">{known_for_department}</span>
            </div>
            <div className="grid grid-cols-2 md:flex md:flex-row  md:gap-0 md:flex-col">
              <span className="font-semibold text-lg">Gender</span>
              <span className="italic">{genders[gender]}</span>
            </div>
            <div className="grid grid-cols-2 md:flex md:flex-row  md:gap-0 md:flex-col">
              <span className="font-semibold text-lg">Birthday</span>
              <span className="italic">{formatDate(birthday)}</span>
            </div>
            <div className="grid grid-cols-2 md:flex md:flex-row  md:gap-0 md:flex-col">
              <span className="font-semibold text-lg">Place of Birth</span>
              <span className="italic">{place_of_birth}</span>
            </div>
          </div>
        </div>
      </div>
      <PersonKnownFor casts={cast} />
    </div>
  );
}

export default PersonDetail;

export async function loader({ params }) {
  const { personID } = params;
  const res = {};
  res["known_for"] = await personKnownFor(personID);
  res["detail"] = await fetchDetail("person", personID);
  return res;
}
