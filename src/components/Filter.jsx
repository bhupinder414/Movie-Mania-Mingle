import { useSearchParams } from "react-router-dom";
import DatePickerComponent from "./DatePickerComponent";
import RangeSliderComponent from "./RangeSlider";
import VoteAverageFilter from "./VoteAverageFilter";

function Filter({ genres, searchedGenres, setSearch }) {
  let selectedGenres = searchedGenres
    .split(",")
    .filter((ele) => ele !== "")
    .map((ele) => +ele);
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div className="ml-8 mt-4 mb-4 border p-4 rounded-xl border-slate-200 ">
      <div className="font-bold text-2xl mb-4">Genres</div>
      <div className="w-full mb-4">
        <ul className="w-full flex gap-2 flex-wrap">
          {genres.map((ele) => (
            <li
              className={`p-2 border border-slate-800 rounded-2xl cursor-pointer ${
                selectedGenres.includes(ele.id)
                  ? "bg-violet-400 text-white font-semibold border-violet-400"
                  : ""
              }`}
              key={ele.id}
              onClick={() => {
                if (!selectedGenres.includes(ele.id)) {
                  selectedGenres.push(ele.id);
                  searchParams.set("genres", selectedGenres.join(","));
                } else {
                  selectedGenres.splice(selectedGenres.indexOf(ele.id), 1);
                  searchParams.set("genres", selectedGenres.join(","));
                }
                searchParams.set("page", 1);
                setSearchParams(searchParams);
              }}
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
        <div className="flex gap-10 mt-4 mb-4 items-center">
          <label className="font-semibold text-xl" htmlFor="to_date">
            To
          </label>

          <DatePickerComponent name="to_date" />
        </div>
      </div>
      <div className="font-bold text-2xl mb-4">Runtime</div>

      <div className="w-full mb-4">
        <RangeSliderComponent
          min="0"
          max="400"
          step="10"
          defaultValue={[0, 400]}
        />
      </div>

      <div className="font-bold text-2xl mb-4">Vote Average</div>
      <div className="flex gap-2">
        <VoteAverageFilter
          name="vote_average_from"
          placeholder="0.0"
          step="0.01"
          min="0"
          max="10"
        />
        <span className=" font-semibold text-xl">-</span>
        <VoteAverageFilter
          name="vote_average_to"
          placeholder="10.0"
          step="0.01"
          min="0"
          max="10"
        />
      </div>
    </div>
  );
}

export default Filter;
