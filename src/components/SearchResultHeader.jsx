import { useSearchParams } from "react-router-dom";
import { DEFAULT_PAGE, PAGE_KEY } from "../utils/constants";

const SearchResultHeader = ({ results, activeId, setActiveId }) => {
  const [params, setParams] = useSearchParams();
  const handleClick = (e) => {
    setActiveId(e.target.closest("li").id);
    params.set(PAGE_KEY, DEFAULT_PAGE);
    setParams(params);
  };
  return (
    <div className="  w-11/12 ml-4 sm:w-auto ">
      <ul className="flex flex-col sm:flex-row rounded-3xl  bg-slate-200 sm:rounded-full p-[0.1rem]">
        {results.map((element) => {
          return (
            <li
              key={element.id}
              id={element.id}
              className={`${
                activeId === element.id ? "bg-white" : "bg-transparent"
              } p-2 pl-4 pr-4 rounded-full cursor-pointer flex gap-2 items-center justify-center`}
              onClick={handleClick}
            >
              <div>{element.title}</div>
              <div className=" rounded-xl  text-center bg-slate-300 p-1 pl-3 pr-3 ">
                {element.total}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchResultHeader;
