import { useSearchParams } from "react-router-dom";

function Sorting({ options, selectedValue }) {
  const [params, setParams] = useSearchParams();

  function handleSortBy(e) {
    params.set("sort_by", e.target.value);
    setParams(params);
  }

  return (
    <div className="ml-8 mt-4 mb-4 border p-4 rounded-xl border-slate-200 ">
      <div className="font-bold text-2xl mb-4">Sort By</div>
      <div className="w-full">
        <select
          className="w-full border border-slate-300 focus:border-gray-400  p-2 rounded-lg"
          name="sort_by"
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
}

export default Sorting;
