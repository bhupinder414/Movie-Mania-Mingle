import { useSearchParams } from "react-router-dom";

function VoteAverageFilter({ name, min, max, step, placeholder }) {
  const [params, setParams] = useSearchParams();
  const val = params.get(name) || "";

  function handleChange(e) {
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
    value = value.toFixed(2);
    params.set(name, value);
    params.set("page", 1);

    setParams(params);
  }

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
}

export default VoteAverageFilter;
