import { useSearchParams } from "react-router-dom";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { HiMiniEllipsisHorizontal } from "react-icons/hi2";
import { PAGE_KEY } from "../utils/constants";

const Pagination = ({ totalPages, currentPage }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  currentPage = +currentPage;

  const goToPage = (no) => {
    searchParams.set(PAGE_KEY, no);
    setSearchParams(searchParams);
  };
  return (
    <div className=" flex justify-center lg:block lg:float-right m-5 lg:mr-10 text-center ">
      <ul className="flex  items-center ">
        {currentPage > 1 ? (
          <li
            className="p-2 border border-slate-300 cursor-pointer min-w-10"
            onClick={() => goToPage(currentPage - 1)}
          >
            <FaCaretLeft className="w-6 h-6" />
          </li>
        ) : null}
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
        ) : null}
        {currentPage >= 3 ? (
          <li
            className="p-2 hidden sm:block border border-slate-300 cursor-pointer min-w-10"
            onClick={() => goToPage(currentPage - 1)}
          >
            {currentPage - 1}
          </li>
        ) : null}
        {currentPage != 1 && currentPage != totalPages ? (
          <li
            className="p-2 border border-slate-300 cursor-pointer min-w-10  bg-slate-400 text-white"
            onClick={() => goToPage(currentPage)}
          >
            {currentPage}
          </li>
        ) : null}
        {currentPage < totalPages - 1 ? (
          <li
            className="p-2 hidden sm:block border border-slate-300 cursor-pointer min-w-10"
            onClick={() => goToPage(currentPage + 1)}
          >
            {currentPage + 1}
          </li>
        ) : null}
        {totalPages - 2 > currentPage ? (
          <li className="p-2 border border-slate-300  min-w-10">
            <HiMiniEllipsisHorizontal className="w-6 h-6" />
          </li>
        ) : null}
        {totalPages > 1 ? (
          <li
            className={`p-2 border border-slate-300 cursor-pointer min-w-10${
              currentPage == totalPages ? " bg-slate-400 text-white" : ""
            }`}
            onClick={() => goToPage(totalPages)}
          >
            {totalPages}
          </li>
        ) : null}
        {currentPage < totalPages ? (
          <li
            className="p-2 border border-slate-300 cursor-pointer min-w-10"
            onClick={() => goToPage(currentPage + 1)}
          >
            <FaCaretRight className="w-6 h-6" />
          </li>
        ) : null}
      </ul>
    </div>
  );
};

export default Pagination;
