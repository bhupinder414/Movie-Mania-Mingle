import { IoPlaySharp } from "react-icons/io5";
import { VIDEO_IMAGE_URL, VIDEO_TYPE_KEY } from "../utils/constants";
import useModalContext from "../hooks/useModalContext";
import { formatDate } from "./../utils/formatFunctions";
import { MdDateRange } from "react-icons/md";
import Image from "./Image";

const VideoCard = ({ videoDetail, detailedView = false }) => {
  const imagePath = VIDEO_IMAGE_URL.replace("{{key}}", videoDetail?.key);
  const { openModal } = useModalContext();
  const handleOpenModal = () => {
    openModal(videoDetail?.name, videoDetail?.key);
  };
  return (
    <div
      className={` cursor-pointer ${
        detailedView
          ? "flex flex-col  sm:flex-row  gap-4 border border-gray-400 rounded-xl sm:w-full lg:w-[48%] sm:pr-4"
          : ""
      }`}
      onClick={handleOpenModal}
    >
      <div
        className={` relative flex-shrink-0 bg-gray-100 ${
          detailedView
            ? "w-full sm:w-1/2 lg:w-[20rem] h-56 rounded-tl-xl rounded-bl-xl"
            : "w-72 sm:w-96  md:w-[30rem] h-64"
        }`}
      >
        <Image
          className={`w-full h-full ${
            detailedView
              ? "object-fill rounded-tl-xl rounded-tr-xl sm:rounded-tr-none sm:rounded-bl-xl"
              : "object-none"
          }`}
          type={VIDEO_TYPE_KEY}
          path={imagePath}
          alt={`video`}
        />
        <div>
          <IoPlaySharp className="absolute inset-0 m-auto text-white w-16 h-16 bg-gray-950 rounded-full p-4" />
        </div>
      </div>
      {detailedView && (
        <div className="flex flex-col gap-2 items-center sm:items-start  sm:pt-4">
          <div className="text-2xl font-bold">{videoDetail?.name}</div>
          <div className="flex gap-1 items-center italic">
            <MdDateRange />
            <span>{formatDate(videoDetail?.published_at)}</span>
          </div>
          <div className="font-semibold text-lg">{videoDetail?.type}</div>
        </div>
      )}
    </div>
  );
};

export default VideoCard;
