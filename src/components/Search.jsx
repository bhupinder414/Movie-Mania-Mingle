import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let searchQuery = query;
    setQuery("");
    navigate(`/search?query=${searchQuery}`);
  }

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <div className=" w-[38%] text-gray-500  ">
      <form className="flex" onSubmit={handleSubmit}>
        <input
          className=" focus:outline-none focus:ring-transparent focus:border-transparent rounded-full bg-white h-10 w-full p-4 "
          placeholder="Search for Movies,TV Shows and Persons"
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
}

export default Search;
