import React from "react";
import { NavHashLink } from "react-router-hash-link";
import { NavbarLinks } from "./Navbar";
import Logo from "../assets/logo192.png";

function ResponsiveMenu({ showMenu, setShowMenu }) {
  console.log("showMenu", showMenu);

  return (
    <div className={`${showMenu ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white  px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md `}>
      <div className="card">
        <div className="flex items-center justify-start gap-3">
          <img src={Logo} alt="" className="h-16" />
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {NavbarLinks.map((data) => (
              <li className="border-b-2">
                <NavHashLink to={data.link} onClick={() => setShowMenu(false)} className="mb-5 inline-block">
                  {data.name}
                </NavHashLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="footer">
        <h1>
          Made with ❤ by <a href="https://dilshad-ahmed.github.io/">Dilshad</a>{" "}
        </h1>
      </div>
    </div>
  );
}

export default ResponsiveMenu;
