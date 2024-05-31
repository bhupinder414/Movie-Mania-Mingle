import { useSearchParams } from "react-router-dom";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { HiMiniEllipsisHorizontal } from "react-icons/hi2";

function Pagination({ totalPages, currentPage }) {
  const [searchParams, setSearchParams] = useSearchParams();
  currentPage = +currentPage;

  function goToPage(no) {
    searchParams.set("page", no);
    setSearchParams(searchParams);
  }
  return (
    <div className=" float-right m-5 text-center ">
      <ul className="flex  items-center ">
        {currentPage > 1 ? (
          <li
            className="p-2 border border-slate-300 cursor-pointer min-w-10"
            onClick={() => goToPage(currentPage - 1)}
          >
            <FaCaretLeft className="w-6 h-6" />
          </li>
        ) : (
          ""
        )}
        <li
          className={`p-2 border border-slate-300 cursor-pointer min-w-10 ${
            currentPage == 1 ? "bg-slate-400 text-white" : ""
          }`}
          onClick={() => goToPage(1)}
        >
          1
        </li>
        {currentPage - 2 > 1 ? (
          <li className="p-2 border border-slate-300  min-w-10">
            <HiMiniEllipsisHorizontal className="w-6 h-6" />
          </li>
        ) : (
          ""
        )}
        {currentPage >= 3 ? (
          <li
            className="p-2 border border-slate-300 cursor-pointer min-w-10"
            onClick={() => goToPage(currentPage - 1)}
          >
            {currentPage - 1}
          </li>
        ) : (
          ""
        )}
        {currentPage != 1 && currentPage != totalPages ? (
          <li
            className="p-2 border border-slate-300 cursor-pointer min-w-10  bg-slate-400 text-white"
            onClick={() => goToPage(currentPage)}
          >
            {currentPage}
          </li>
        ) : (
          ""
        )}
        {currentPage < totalPages - 1 ? (
          <li
            className="p-2 border border-slate-300 cursor-pointer min-w-10"
            onClick={() => goToPage(currentPage + 1)}
          >
            {currentPage + 1}
          </li>
        ) : (
          ""
        )}
        {totalPages - 2 > currentPage ? (
          <li className="p-2 border border-slate-300  min-w-10">
            <HiMiniEllipsisHorizontal className="w-6 h-6" />
          </li>
        ) : (
          ""
        )}
        {totalPages > 1 ? (
          <li
            className={`p-2 border border-slate-300 cursor-pointer min-w-10${
              currentPage == totalPages ? " bg-slate-400 text-white" : ""
            }`}
            onClick={() => goToPage(totalPages)}
          >
            {totalPages}
          </li>
        ) : (
          ""
        )}
        {currentPage < totalPages ? (
          <li
            className="p-2 border border-slate-300 cursor-pointer min-w-10"
            onClick={() => goToPage(currentPage + 1)}
          >
            <FaCaretRight className="w-6 h-6" />
          </li>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
}

export default Pagination;
