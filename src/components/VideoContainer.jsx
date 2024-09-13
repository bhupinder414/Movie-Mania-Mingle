import VideoCard from "./VideoCard";
import {
  MAIN_PAGE_VIDEOS_LENGTH,
  VIDEO_SHIMMER_LENGTH,
} from "../utils/constants";
import useVideos from "../hooks/useVideos";
import { Link, useParams } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { ShimmerThumbnail } from "react-shimmer-effects";

const VideoContainer = ({ type, id }) => {
  const { [id]: dynamicId } = useParams();
  const data = useVideos(type, dynamicId);
  const results = data?.results;
  let filteredData = results?.sort(
    (a, b) => new Date(a.published_at) - new Date(b.published_at)
  );
  filteredData = filteredData?.slice(0, MAIN_PAGE_VIDEOS_LENGTH);
  let hasMore = results?.length > MAIN_PAGE_VIDEOS_LENGTH;
  return (
    <>
      <div className="ml-10 mr-10 mt-4 mb-4 text-4xl font-bold">Videos</div>
      <div
        className={`ml-10 mr-10 ${filteredData ? "overflow-x-auto custom-scrollbar" : ""}`}
      >
        <div className="flex   ">
          {filteredData?.length === 0 && (
            <div className=" text-xl">No Videos Found.</div>
          )}

          {!filteredData
            ? Array.from({ length: VIDEO_SHIMMER_LENGTH }).map((_, ind) => (
                <div
                  className="w-24 sm:w-48  md:w-[30rem] h-64 flex-shrink-0 border border-gray-200 "
                  key={ind}
                >
                  <ShimmerThumbnail height={254} />
                </div>
              ))
            : filteredData?.map((item) => (
                <VideoCard key={item.id} videoDetail={item} />
              ))}
          {filteredData && hasMore && (
            <Link to="videos" state={{ videos: results }}>
              <div className=" relative w-[20rem] h-64 shrink-0 bg-gray-50 text-3xl flex gap-1 justify-center items-center">
                <span className="">View More</span>
                <span>
                  <FaArrowRight />
                </span>
              </div>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default VideoContainer;
