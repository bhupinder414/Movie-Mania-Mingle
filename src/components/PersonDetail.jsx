import { useLoaderData } from "react-router-dom";
import { fetchDetail, personKnownFor } from "../apis/fetchMovies";
import { IMAGE_BASE_URL } from "../helpers/creds.env";
import defaultImg from "./../assets/default_person.jpg";
import PersonKnownFor from "./PersonKnownFor";
import { formatDate } from "../helpers/formatFunctions";

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
    ? `${IMAGE_BASE_URL}/${profile_path}`
    : defaultImg;

  const genders = [];
  genders[0] = "Not Set/Not Specified";
  genders[1] = "Female";
  genders[2] = "Male";
  genders[3] = "Non-binary";

  return (
    <div>
      <div className="flex p-8 pl-20 pr-20 gap-4 bg-gray-800/30 text-white ">
        <div className=" min-w-[300px] h-[400px]">
          <img
            className=" rounded-xl object-cover w-full h-full"
            src={imagePath}
            alt={`image of ${name}`}
          />
        </div>
        <div>
          <div className="font-bold text-5xl ">{name}</div>
          {biography && (
            <div className="mt-6 font-semibold text-2xl">Biography</div>
          )}
          <div className="mt-4">{biography}</div>
          <div className="mt-6 font-semibold text-2xl">Personal Info</div>
          <div className="flex flex-row gap-12 mt-2">
            <div className="flex flex-col">
              <span className="font-semibold text-lg">Known For</span>
              <span className="italic">{known_for_department}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-lg">Gender</span>
              <span className="italic">{genders[gender]}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-lg">Birthday</span>
              <span className="italic">{formatDate(birthday)}</span>
            </div>
            <div className="flex flex-col">
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
