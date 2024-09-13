import { FaCopyright } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-darkblue p-3  text-white">
      <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-1 text-xl">
        <div className=" flex gap-2 items-center">
          <span>Copyright</span>
          <FaCopyright />
          <span>2024</span>
        </div>
        <div>Movie Mania Mingle.</div>
        <div>All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
