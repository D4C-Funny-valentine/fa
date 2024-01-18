import React from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const links = [
  { to: "/", title: "Home" },
  { to: "/about", title: "About" },
  { to: "/sign-in", title: "Sign In" },
];

const Navbar = () => {
  return (
    <header className="bg-slate-200 w-full fixed top-0">
      <div className="h-[100px]  shadow-sm flex justify-evenly container mx-auto items-center">
        <Link to={"/"}>
          <h2 className="text-lg font-semibold flex flex-wrap gap-1">
            <span className="">Blog</span>
            <span className="text-slate-500">News</span>
          </h2>
        </Link>

        <form className="flex items-center bg-white shadow rounded  px-3">
          <input
            type="text"
            placeholder="Search ..."
            className="outline-none py-2 text-sm"
          />
          <button>
            <BsSearch />
          </button>
        </form>

        <nav>
          <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li
                key={link.title}
                className="hover:text-slate-600 active:scale-95 duration-150"
              >
                <Link to={link.to}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
