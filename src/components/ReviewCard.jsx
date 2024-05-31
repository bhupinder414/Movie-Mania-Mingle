import { formatDate } from "../helpers/formatFunctions";
import { IoIosStar } from "react-icons/io";

const VITE_IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

function ReviewCard({
  review: {
    author,
    created_at,
    content,
    author_details: { rating, avatar_path },
  },
}) {
  let nameArray = author.split(" ");
  return (
    <div className="border-slate-500 p-4 border mt-4 mb-2 rounded-2xl">
      <div className="flex gap-4 items-center">
        {avatar_path ? (
          <img
            className="w-14 h-14 rounded-full"
            src={`${VITE_IMAGE_BASE_URL}/${avatar_path}`}
          />
        ) : (
          <div className="w-14 h-14 p-4  border-slate-200 bg-slate-500 text-white rounded-full text-center">
            {nameArray[0].at(0).toUpperCase() +
              (nameArray.length > 1
                ? nameArray[nameArray.length - 1].at(0).toUpperCase()
                : "")}
          </div>
        )}

        <div>
          <div className="font-bold text-xl">Review By {author}</div>
          <div className="italic">Written on {formatDate(created_at)}</div>
          <div className="flex gap-2 items-center font-semibold">
            <IoIosStar />
            <span>{rating ? `${rating}/10` : "N/A"}</span>
          </div>
        </div>
      </div>
      <div className="mt-4">{content}</div>
    </div>
  );
}

export default ReviewCard;
