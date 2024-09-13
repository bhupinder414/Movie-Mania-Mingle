import {
  PERSON_TYPE_KEY,
  VIDEO_TYPE_KEY,
  VITE_IMAGE_BASE_URL,
} from "../utils/constants";
import defaultImgPerson from "./../assets/default_person.jpg";
import defaultImgMovie from "./../assets/default-movie.webp";

const Image = ({ type, path, alt, className }) => {
  let imagePath =
    type == VIDEO_TYPE_KEY
      ? path
      : path
      ? `${VITE_IMAGE_BASE_URL}/${path}`
      : type === PERSON_TYPE_KEY
      ? defaultImgPerson
      : defaultImgMovie;
  return (
    <img
      loading="lazy"
      className={className ? className : "rounded-xl w-full h-full object-fill"}
      src={imagePath}
      alt={alt}
    />
  );
};

export default Image;
