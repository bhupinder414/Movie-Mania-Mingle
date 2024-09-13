import { Link } from "react-router-dom";
import { genders, PERSON_TYPE_KEY } from "../utils/constants";
import Image from "./Image";

const SearchResultPersons = ({ item }) => {
  return (
    <Link to={`/person/${item?.id}`}>
      <div className="flex flex-col sm:flex-row gap-4 m-4 border-slate-400 border rounded-xl  items-center">
        <div className="w-full sm:w-1/3 flex-shrink-0  h-64 lg:h-56 lg:w-3/12 rounded-tr-xl sm:rounded-tr-none rounded-tl-xl sm:rounded-bl-xl bg-gray-100 border-r-slate-400 border-r">
          <Image
            type={PERSON_TYPE_KEY}
            path={item?.profile_path}
            className="w-full h-full rounded-tr-xl sm:rounded-tr-none rounded-tl-xl sm:rounded-bl-xl border-r-slate-400 border-r"
            alt={`image of ${item?.name}`}
          />
        </div>
        <div className="">
          <div className=" text-center sm:!text-left text-3xl font-bold">{item?.name}</div>
          <div className="text-center sm:!text-left italic mt-2">
            {item && genders[item?.gender]}
          </div>

          <div className="text-center sm:!text-left italic mt-2 font-bold text-2xl">
            {item?.known_for_department}
          </div>

          <div className=" p-2 sm:pr-2 sm:pl-0 pb-1  line-clamp-5 sm:line-clamp-3 overflow-hidden">
            <span className="font-bold text-xl">Known For: </span>
            <span>
              {item?.known_for
                ?.slice(0, 5)
                ?.map((item) => item.title)
                ?.join(", ")}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchResultPersons;
