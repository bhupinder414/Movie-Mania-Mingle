import { useSearchParams } from "react-router-dom";

function SearchResultHeader({ results, activeId, setActiveId }) {
  const [params, setParams] = useSearchParams();
  function handleClick(e) {
    setActiveId(e.target.closest("li").id);
    params.set("page", 1);
    setParams(params);
  }
  return (
    <div className="">
      <ul className="flex  bg-slate-200 rounded-full p-[0.1rem]">
        {results.map((element) => {
          return (
            <li
              key={element.id}
              id={element.id}
              className={`${
                activeId === element.id ? "bg-white" : "bg-transparent"
              } p-2 pl-4 pr-4 rounded-full cursor-pointer flex gap-2 items-center`}
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
}

export default SearchResultHeader;
