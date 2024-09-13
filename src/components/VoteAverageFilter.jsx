import { useSearchParams } from "react-router-dom";
import { DEFAULT_PAGE, PAGE_KEY } from "../utils/constants";

const VoteAverageFilter = ({ name, min, max, step, placeholder }) => {
  const [params, setParams] = useSearchParams();
  const val = params.get(name) || "";

  const handleChange = (e) => {
    let value = parseFloat(e.target.value.trim());
    if (isNaN(value)) {
      params.delete(name);
      setParams(params);
      return;
    }

    if (value < 0) {
      value = 0;
    } else if (value > 10) {
      value = 10;
    }
    params.set(name, value);
    params.set(PAGE_KEY, DEFAULT_PAGE);
    setParams(params);
  };

  return (
    <div className="w-full mb-4 flex  gap-2 items-center">
      <input
        className="w-full border border-slate-200 focus:border-slate-400 focus:outline-none rounded-lg p-2"
        type="number"
        step={step}
        name={name}
        min={min}
        max={max}
        value={val}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default VoteAverageFilter;
