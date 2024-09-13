import { useLocation } from "react-router-dom";
import VideoCard from "./VideoCard";

const ShowAllVideos = () => {
  const {
    state: { videos },
  } = useLocation();
  return (
    <div className="m-8">
      <div className="flex flex-wrap  flex-row gap-6 justify-between">
        {videos?.map((video) => (
          <VideoCard videoDetail={video} key={video?.id} detailedView="true" />
        ))}
      </div>
    </div>
  );
};

export default ShowAllVideos;
