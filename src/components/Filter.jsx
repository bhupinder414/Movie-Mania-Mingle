import { useSearchParams } from "react-router-dom";
import DatePickerComponent from "./DatePickerComponent";
import RangeSliderComponent from "./RangeSlider";
import VoteAverageFilter from "./VoteAverageFilter";
import {
  DEFAULT_PAGE,
  GENRES_KEY,
  PAGE_KEY,
  RUNTIME_LOWER_RANGE,
  RUNTIME_UPPER_RANGE,
  VOTE_AVERAGE_LOWER_RANGE,
  VOTE_AVERAGE_UPPER_RANGE,
} from "../utils/constants";

const Filter = ({ genres, searchedGenres }) => {
  let selectedGenres = searchedGenres
    ?.split(",")
    ?.filter((ele) => ele !== "")
    ?.map((ele) => +ele);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleGenreClick = (ele) => {
    if (!selectedGenres.includes(ele.id)) {
      selectedGenres.push(ele.id);
      searchParams.set(GENRES_KEY, selectedGenres.join(","));
    } else {
      selectedGenres.splice(selectedGenres.indexOf(ele.id), 1);
      searchParams.set(GENRES_KEY, selectedGenres.join(","));
    }
    searchParams.set(PAGE_KEY, DEFAULT_PAGE);
    setSearchParams(searchParams);
  };

  return (
    <div className=" border p-4 rounded-xl border-slate-200 ">
      <div className="font-bold text-2xl mb-4">Genres</div>
      <div className="w-full mb-4">
        <ul className="w-full flex gap-2 flex-wrap">
          {genres?.map((ele) => (
            <li
              className={`p-2 border border-slate-800 rounded-2xl cursor-pointer ${
                selectedGenres.includes(ele.id)
                  ? "bg-violet-400 text-white font-semibold border-violet-400"
                  : ""
              }`}
              key={ele.id}
              onClick={handleGenreClick.bind(null, ele)}
            >
              {ele.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="font-bold text-2xl mb-4">Release Date</div>
      <div className="w-full mb-4">
        <div className="flex gap-4 mt-4 mb-4 items-center">
          <label className="font-semibold text-xl" htmlFor="from_date">
            From
          </label>
          <DatePickerComponent name="from_date" />
        </div>
        <div className=" flex gap-10 mt-4 mb-4 items-center">
          <label className="font-semibold text-xl" htmlFor="to_date">
            To
          </label>

          <DatePickerComponent name="to_date" />
        </div>
      </div>
      <div className="font-bold text-2xl mb-4">Runtime</div>

      <div className="w-full mb-4">
        <RangeSliderComponent
          min={RUNTIME_LOWER_RANGE}
          max={RUNTIME_UPPER_RANGE}
          step="10"
          defaultValue={[RUNTIME_LOWER_RANGE, RUNTIME_UPPER_RANGE]}
        />
      </div>

      <div className="font-bold text-2xl mb-4">Vote Average</div>
      <div className="flex gap-2">
        <VoteAverageFilter
          name="vote_average_from"
          placeholder={VOTE_AVERAGE_LOWER_RANGE}
          step="1"
          min={VOTE_AVERAGE_LOWER_RANGE}
          max={VOTE_AVERAGE_UPPER_RANGE}
        />
        <span className=" font-semibold text-xl">-</span>
        <VoteAverageFilter
          name="vote_average_to"
          placeholder={VOTE_AVERAGE_UPPER_RANGE}
          step="1"
          min={VOTE_AVERAGE_LOWER_RANGE}
          max={VOTE_AVERAGE_UPPER_RANGE}
        />
      </div>
    </div>
  );
};

export default Filter;
