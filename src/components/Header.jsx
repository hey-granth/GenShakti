import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-green-600">
          GENSHAKTI 🍃
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/impact"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                Impact
              </Link>
            </li>
            <li>
              <Link
                to="/use-cases"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                Use Cases
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Ayush Fund
        </button>
      </div>
    </header>
  );
}

export default Header;
