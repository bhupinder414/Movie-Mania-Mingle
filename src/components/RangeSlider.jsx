import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { useSearchParams } from "react-router-dom";

function RangeSliderComponent({ min, max, defaultValue, step }) {
  const [params, setParams] = useSearchParams();
  const lowerVal = params.get("runtime_from") || defaultValue[0];
  const upperVal = params.get("runtime_to") || defaultValue[1];

  const handleInput = (newValue) => {
    params.set("runtime_from", newValue[0]);
    params.set("runtime_to", newValue[1]);
    params.set("page", 1);

    setParams(params);
  };

  return (
    <>
      <div className="flex items-center gap-3">
        <label className="font-semibold text-xl">{min}</label>

        <RangeSlider
          min={min}
          max={max}
          step={step}
          value={[lowerVal, upperVal]}
          onInput={handleInput}
        />

        <label className="font-semibold text-xl">{max}</label>
      </div>
      <div className="text-center font-semibold mt-2">{`${lowerVal} minutes - ${upperVal} minutes`}</div>
    </>
  );
}

export default RangeSliderComponent;
