import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PLACEHOLDER_TIMING, placeholders } from "../utils/constants";

const Search = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    let intervalId = "";
    if (query === "") {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
      }, PLACEHOLDER_TIMING);
    }
    return () => clearInterval(intervalId);
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let searchQuery = query;
    if (searchQuery === "") {
      return;
    }
    setQuery("");
    navigate(`/search?query=${searchQuery}`);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="w-full   sm:m-0 sm:w-[55%] lg:w-[38%] text-gray-500  ">
      <form className="flex" onSubmit={handleSubmit}>
        <input
          className="ml-10 sm:ml-0 focus:outline-none focus:ring-transparent focus:border-transparent rounded-full bg-white h-10 w-full p-4 "
          placeholder={placeholders[currentIndex]}
          type="text"
          name="query"
          value={query}
          onChange={handleChange}
        />
        <input
          className=" cursor-pointer rounded-full h-10 w-40 relative right-8 bg-violet-500 hover:bg-violet-400 text-white"
          type="submit"
          name="search"
          value="Search"
        />
      </form>
    </div>
  );
};

export default Search;
