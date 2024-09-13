import { ImCross } from "react-icons/im";
import ReactDOM from "react-dom";
import useModalContext from "../hooks/useModalContext";
import { YOUTUBE_VIDEO_LINK } from "../utils/constants";
const Modal = () => {
  const { videoId: video_id, closeModal, name } = useModalContext();
  const videoLink = YOUTUBE_VIDEO_LINK.replace("{{video_id}}", video_id);
  return ReactDOM.createPortal(
    <div>
      <div
        className="fixed backdrop-blur-sm top-0 left-0 w-full h-full bg-blur z-[1000]"
        onClick={closeModal}
      ></div>
      <div className=" fixed top-[50%] left-[50%] z-[1001] bg-black translate-x-[-50%] translate-y-[-50%]">
        <div className="text-white font-bold text-xl m-4 flex justify-between items-center ">
          <span>{name}</span>
          <ImCross className="cursor-pointer" onClick={closeModal} />
        </div>
        <iframe
          className="w-[325px] h-[325px] sm:h-[200px] sm:w-[500px] lg:w-[1116px] lg:h-[627px]"
          src={videoLink}
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </div>
    </div>,
    document.getElementById("modal_root")
  );
};

export default Modal;
