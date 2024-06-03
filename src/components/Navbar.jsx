import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul className="flex gap-4 sm:gap-5">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-purple-300 hover:text-purple-400" : ""
            }
          >
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tv"
            className={({ isActive }) =>
              isActive ? "text-purple-300 hover:text-purple-400" : ""
            }
          >
            TV shows
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
