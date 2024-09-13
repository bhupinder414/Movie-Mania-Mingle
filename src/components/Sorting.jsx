import { useSearchParams } from "react-router-dom";
import { SORT_BY_KEY } from "../utils/constants";

const Sorting = ({ options, selectedValue }) => {
  const [params, setParams] = useSearchParams();

  const handleSortBy = (e) => {
    params.set(SORT_BY_KEY, e.target.value);
    setParams(params);
  };

  return (
    <div className=" border p-4 rounded-xl border-slate-200 ">
      <div className="font-bold text-2xl mb-4">Sort By</div>
      <div className="w-full">
        <select
          className="w-full border border-slate-300 focus:border-gray-400  p-2 rounded-lg"
          name={SORT_BY_KEY}
          value={selectedValue}
          onChange={handleSortBy}
        >
          {options?.map((ele) => (
            <option key={ele.id} value={ele.id}>
              {ele.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Sorting;
