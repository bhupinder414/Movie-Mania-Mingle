import { IoMdArrowRoundBack } from "react-icons/io";

const BackButton = () => {
  return (
    <div className="flex gap-1 items-center justify-center text-center text-white bg-purple-400 py-1 pl-3 pr-3 rounded-xl">
      <IoMdArrowRoundBack className=" align-middle inline-block w-9 h-9" />
      <span>Go Back</span>
    </div>
  );
};

export default BackButton;
