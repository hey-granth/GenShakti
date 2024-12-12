import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">GENSHAKTI</h3>
            <p className="text-sm">
              AI-powered renewable energy planning for a sustainable future.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm">
              <li>
                <Link to="/" className="hover:text-green-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-green-400">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/impact" className="hover:text-green-400">
                  Impact
                </Link>
              </li>
              <li>
                <Link to="/use-cases" className="hover:text-green-400">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-green-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Contact</h4>
            <p className="text-sm">Email: info@genshakti.com</p>
            <p className="text-sm">Phone: +1 (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} GENSHAKTI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
