import { ImCross } from "react-icons/im";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSearchParams } from "react-router-dom";
import { DEFAULT_PAGE, PAGE_KEY } from "../utils/constants";

const DatePickerComponent = ({ name }) => {
  const [params, setSearchParams] = useSearchParams();
  const selectedValue = params.get(name) || "";

  const handleChange = (date) => {
    const formattedDate = format(date, "yyyy-MM-dd");
    params.set(name, formattedDate);
    params.set(PAGE_KEY, DEFAULT_PAGE);

    setSearchParams(params);
  };

  const clearSearch = () => {
    params.delete(name);
    setSearchParams(params);
  };

  return (
    <div className="flex">
      <DatePicker
        name={name}
        selected={selectedValue}
        onChange={(date) => handleChange(date)}
        dateFormat="dd/MM/yyyy"
        className="border w-full border-slate-300  focus:border-slate-400 focus:outline-none rounded-md px-4 py-2"
      />
      <ImCross
        className=" float-right top-3 right-6 relative cursor-pointer"
        onClick={clearSearch}
      />
    </div>
  );
};

export default DatePickerComponent;
