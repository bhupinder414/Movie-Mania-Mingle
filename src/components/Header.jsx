import { Link } from "react-router-dom";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Search from "./Search";
const Header = () => {
  return (
    <header className="md:sticky top-0 shadow-2xl z-10 bg-darkblue opacity-95 backdrop-blur-3xl pt-3 pb-3 sm:p-3 text-white flex flex-col gap-6 sm:flex-row sm:justify-between lg:justify-normal lg:gap-80 sm:pl-8 sm:pr-8 items-center text-xl ">
      <div className=" flex gap-10  sm:gap-5 items-center">
        <Link to="/">
          <Logo />
        </Link>
        <Navbar />
      </div>
      <Search />
    </header>
  );
};

export default Header;
