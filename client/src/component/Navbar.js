import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="bg-gray-900 text-white">
        <div className="container mx-auto">
          <button className="block md:hidden px-4 py-2 text-white" aria-label="Toggle navigation">
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 5a1 1 0 1 1 0-2h12a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6a1 1 0 1 1 0-2h12a1 1 0 0 1 0 2H4z"
              />
            </svg>
          </button>
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0">
              <span className="font-semibold text-lg">Your Logo</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <Link
                  to="/"
                  className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium"
                >
                  Get
                </Link>
                <Link
                  to="/post"
                  className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium"
                >
                  Post
                </Link>
                <Link
                  to="/delete"
                  className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium"
                >
                  Delete
                </Link>
                <Link
                  to="/update"
                  className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium"
                >
                  Update
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
