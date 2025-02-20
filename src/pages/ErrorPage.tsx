import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="flex-col space-y-4 text-center">
          <div className="text-5xl font-medium">Page not found</div>
          <div className="text-gray-500">
            Sorry, the page you're looking for isn't available.
          </div>
          <div className="flex items-center justify-center">
            <Link to={"/"}>
              <div className="bg-fuchsia-600 px-4 py-1 text-white font-medium rounded-lg  hover:scale-105 cursor-pointer">
                Visit Homepage
              </div>
            </Link>
          </div>
        </div>
      </div>

      <script src="https://cdn.tailwindcss.com"></script>
    </div>
  );
};

export default ErrorPage;
