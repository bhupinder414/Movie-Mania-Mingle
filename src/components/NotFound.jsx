import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function NotFound() {
  return (
    <div className="grid grid-rows-5">
      <div className="bg-gray-100 row-span-1">
        <Header />
      </div>
      <div className=" row-span-5">
        <div className=" h-full flex items-center justify-center min-h-[34rem] bg-gray-100">
          <div className="bg-white p-10 rounded-lg shadow-md text-center">
            <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
            <p className="text-gray-600 mb-6">
              The page you are looking for doesn&apos;t exist or has been moved.
            </p>
            <Link to="/" className="text-blue-500 hover:underline">
              Go back to Homepage
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 row-span-1">
        <Footer className=" " />
      </div>
    </div>
  );
}

export default NotFound;
