import { FaCopyright } from "react-icons/fa6";
function Footer() {
  return (
    <footer className="bg-darkblue p-3  text-white">
      <div className="text-center flex flex-row items-center justify-center gap-1 text-xl">
        <span>Copyright</span>
        <FaCopyright />
        <span>2024 Movie Mania Mingle. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
