import { AVATAR_TYPE } from "../utils/constants";
import { formatDate } from "../utils/formatFunctions";
import { IoIosStar } from "react-icons/io";
import Image from "./Image";
import parse from "html-react-parser";

const ReviewCard = ({
  review: {
    author,
    created_at,
    content,
    author_details: { rating, avatar_path },
  },
  brief = false,
}) => {
  let nameArray = author.split(" ");
  content = parse(content);
  return (
    <div className="border border-gray-300 p-4  mt-4 mb-2 rounded-2xl shadow-lg">
      <div className="flex gap-4 items-center ">
        {avatar_path ? (
          <div className="w-14 h-14 rounded-full bg-gray-100">
            <Image
              className="w-14 h-14 rounded-full"
              type={AVATAR_TYPE}
              path={avatar_path}
              alt="Avatar"
            />
          </div>
        ) : (
          <div className="w-14 h-14 p-4  border-slate-200 bg-slate-500 text-white rounded-full text-center">
            {nameArray[0].at(0).toUpperCase() +
              (nameArray.length > 1
                ? nameArray[nameArray.length - 1].at(0).toUpperCase()
                : "")}
          </div>
        )}

        <div>
          <div className="font-bold sm:text-xl ">Review By {author}</div>
          <div className="italic text-sm sm:text-lg">
            Written on {formatDate(created_at)}
          </div>
          <div className="flex gap-2 items-center font-semibold text-sm sm:text-lg">
            <IoIosStar />
            <span>{rating ? `${rating}/10` : "N/A"}</span>
          </div>
        </div>
      </div>
      <div
        className={`mt-4 ${
          brief ? "line-clamp-5 md:line-clamp-4 overflow-hidden" : ""
        }`}
      >
        {content}
      </div>
    </div>
  );
};

export default ReviewCard;
