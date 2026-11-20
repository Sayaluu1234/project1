import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
      {/* Error Code */}
      <h1 className="text-8xl font-extrabold text-green-600">
        404
      </h1>

      {/* Message */}
      <h2 className="text-3xl font-bold text-gray-800 mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-600 mt-3 text-center max-w-md">
        Sorry! The page you are looking for doesn't exist or has been moved.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex gap-4">
        <Link
          to="/"
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          Go Home
        </Link>

        <button
          onClick={() => window.history.back()}
          className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition"
        >
          Go Back
        </button>
      </div>

      {/* Footer */}
      <p className="mt-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} Online Marketplace for Farmers
      </p>
    </div>
  );
};

export default NotFound;