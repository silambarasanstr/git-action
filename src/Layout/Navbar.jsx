import { NavLink } from "react-router-dom";
import navLinks from "../data/navLinks";

const Navbar = () => {
  return (
    <nav className=" shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <h1 className="text-2xl font-bold ">Themes</h1>

          {/* Navigation */}
          <ul className="flex items-center gap-6">
            {navLinks.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `transition-colors duration-300 ${
                      isActive
                        ? "text-blue-400 font-semibold"
                        : "text-slate-800 "
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
