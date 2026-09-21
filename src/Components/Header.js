import { LOGO_URL } from "../Utils/Constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

export const Header = () => {
  const onlinestatus = useOnlineStatus();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-green-100 bg-green/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex h-[72px] sm:h-20 w-full max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-10 xl:px-14">

        {/* Logo */}
        <div className="flex shrink-0 items-center">
          <Link to="/" className="block">
            <img
              src={LOGO_URL}
              alt="Mama's Kitchen"
              className="h-14 sm:h-16 md:h-[70px] w-auto object-contain transition-transform duration-200 hover:scale-105"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="m-0 flex list-none items-center gap-0.5 sm:gap-1 md:gap-2 lg:gap-3 p-0 text-sm font-medium text-gray-700">

            {/* Online Status */}
            <li className="mr-1 hidden sm:flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600">
              <span
                className={`h-2 w-2 rounded-full ${
                  onlinestatus
                    ? "bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.7)]"
                    : "bg-red-500"
                }`}
              />
              <span>Online</span>
            </li>

            {/* Home */}
            <li>
              <Link
                to="/"
                className="group relative block rounded-lg px-2.5 py-2 transition-all duration-200 hover:bg-orange-50 hover:text-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 md:px-3.5"
              >
                Homee
                <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-orange-500 transition-all duration-200 group-hover:w-4" />
              </Link>
            </li>

            {/* About */}
            <li>
              <Link
                to="/about"
                className="group relative block rounded-lg px-2.5 py-2 transition-all duration-200 hover:bg-orange-50 hover:text-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 md:px-3.5"
              >
                About
                <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-orange-500 transition-all duration-200 group-hover:w-4" />
              </Link>
            </li>

            {/* Contact */}
            <li>
              <Link
                to="/contact"
                className="group relative block rounded-lg px-2.5 py-2 transition-all duration-200 hover:bg-orange-50 hover:text-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 md:px-3.5"
              >
                Contact Us
                <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-orange-500 transition-all duration-200 group-hover:w-4" />
              </Link>
            </li>

            {/* Cart */}
            <li className="ml-1 sm:ml-2">
              <Link
                to="/cart"
                className="flex items-center gap-1.5 rounded-xl bg-orange-500 px-3.5 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-md active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 sm:px-5"
              >
                Cart
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;