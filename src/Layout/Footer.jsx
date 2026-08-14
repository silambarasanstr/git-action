import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Logo / Brand */}
          <div>
            <h2 className="text-xl font-bold text-gray-900">Themes Shop</h2>
            <p className="mt-1 text-sm text-gray-500">
              Themes
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-5 text-sm text-gray-600">
            <Link to="/" className="transition hover:text-gray-900">
              Home
            </Link>
            <Link to="/products" className="transition hover:text-gray-900">
              Products
            </Link>
            <Link to="/about" className="transition hover:text-gray-900">
              About
            </Link>
            <Link to="/contact" className="transition hover:text-gray-900">
              Contact
            </Link>
          </nav>
        </div>

        {/* Bottom */}
        <div className="mt-6 border-t border-gray-100 pt-5 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Themes Shop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
