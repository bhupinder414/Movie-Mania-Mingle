import { IoCloudOfflineSharp } from "react-icons/io5";

const Offline = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-5 sm:px-2 sm:py-2">
      <div className="bg-white shadow-lg rounded-lg p-8 sm:p-2 md:p-8 max-w-md text-center ">
        <div className="flex justify-center text-blue-200">
          <IoCloudOfflineSharp className="w-20 h-20 md:!w-40 md:!h-40" />
        </div>
        <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-blue-300">
          You Are Offline
        </h2>
        <p className=" mb-6 md:text-lg text-blue-300">
          It looks like you are not connected to the internet. Please check your
          connection and try again.
        </p>
      </div>
    </div>
  );
};

export default Offline;
