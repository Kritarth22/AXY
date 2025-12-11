import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      navigate(`/search/${query}`);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1e1e1e] border-b border-gray-700 shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <Link className="text-2xl font-bold text-indigo-400" to="/">
          MyLogo
        </Link>

        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none w-64"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleSearch}
        />

        <div className="flex items-center space-x-6 text-gray-300">
          <Link to="/about" className="hover:text-indigo-400">
            About
          </Link>
          <Link to="/contact" className="hover:text-indigo-400">
            Contact
          </Link>

          <Link
            to="/signin"
            className="px-4 py-2 bg-indigo-500 text-black font-semibold rounded-xl hover:bg-indigo-600 transition"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-indigo-500 text-black font-semibold rounded-xl hover:bg-indigo-600 transition"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
