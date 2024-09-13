import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { useSearchParams } from "react-router-dom";
import {
  DEFAULT_PAGE,
  PAGE_KEY,
  RUNTIME_FROM,
  RUNTIME_TO,
} from "../utils/constants";

const RangeSliderComponent = ({ min, max, defaultValue, step }) => {
  const [params, setParams] = useSearchParams();
  const lowerVal = params.get(RUNTIME_FROM) || defaultValue[0];
  const upperVal = params.get(RUNTIME_TO) || defaultValue[1];

  const handleInput = (newValue) => {
    params.set(RUNTIME_FROM, newValue[0]);
    params.set(RUNTIME_TO, newValue[1]);
    params.set(PAGE_KEY, DEFAULT_PAGE);
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
};

export default RangeSliderComponent;
