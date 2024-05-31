import { Link } from "react-router-dom";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Search from "./Search";
function Header() {
  return (
    <header className="bg-darkblue p-3 text-white flex gap-80 pl-8 pr-8 items-center text-xl">
      <div className="flex gap-5 items-center">
        <Link to="/">
          <Logo />
        </Link>
        <Navbar />
      </div>
      <Search />
    </header>
  );
}

export default Header;
