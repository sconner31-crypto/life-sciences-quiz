import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Contained Wrapper for all header content */}
      <div className="mx-auto max-w-6xl w-full">
        {/* Imperial Logo Row with transparency */}
        <div className="bg-imperialBlue/90 text-white backdrop-blur">
          <div className="flex items-center py-6 px-4">
            <a href="/" aria-label="Imperial homepage" className="block">
              <svg
                width="180"
                height="24"
                viewBox="0 0 727 80"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-auto"
              >
                {/* Logo paths unchanged */}
                <path d="M301.453 0V80H353.346V66H316.622V46H350.152V32.4H316.622V14H353.346V0H301.453Z" />
                <path d="M238.397 12.9177H227.22V39.8776H238.397C247.142 39.8776 253.566 35.6376 253.566 26.3953C253.566 16.8 247.142 12.9177 238.397 12.9177ZM239.196 52.8H227.22V80H212.052V0H239.196C256.219 0 269.533 7.72706 269.533 26.4C269.533 44.8 256.121 52.8 239.196 52.8Z" />
                <path d="M485.079 0V14H503.84V66H485.079V80H537.77V66H519.009V14H537.77V0H485.079Z" />
                <path d="M434.191 24.8C434.191 34.4377 428.602 37.4777 419.022 37.4777H406.248V12.9177H419.022C429.419 12.9224 434.191 16.8 434.191 24.8ZM450.158 24.8C450.158 6.12706 437.384 0 420.619 0H391.08V80H406.248V50.4H419.022C419.722 50.4 420.417 50.3859 421.107 50.3624L436.562 80H453.37L436.224 47.1906C444.565 43.4777 450.158 36.3435 450.158 24.8Z" />
                <path d="M604.324 14.1929L615.238 49.4777H593.406L604.324 14.1929ZM594.345 0L567.999 80H583.966L589.409 62.4H619.235L624.678 80H640.645L614.299 0H594.345Z" />
                <path d="M674.889 0V80H726.914V66H690.058V0H674.889Z" />
                <path d="M151.908 0L132.747 47.04L113.587 0H92.0312V80H106.402V20.1882L124.764 62.4H140.731L159.093 20.1882V80H173.463V0H151.908Z" />
                <path d="M0 0V14H18.7613V66H0V80H52.6912V66H33.93V14H52.6912V0H0Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Title + Navigation Side-by-Side in semi-transparent white */}
        <div className="bg-white/90 text-black border-t border-b border-imperialBlue mt-4 backdrop-blur">
          <div className="mx-auto max-w-6xl w-full flex items-stretch px-4">
            <div className="flex items-center pr-6 py-4 flex-1">
              <h1 className="text-lg md:text-xl font-medium">
                Life sciences course chooser quiz
              </h1>
            </div>
            <nav className="flex items-center space-x-6 border-l border-imperialBlue pl-8 py-4">
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
