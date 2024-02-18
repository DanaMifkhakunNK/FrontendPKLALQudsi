import React, { useState } from "react";
import Logo from "../assets/logo192.png";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveAdmin from "./ResponsiveAdmin";

export const AdminLinks = [
  {
    name: "Paket",
    link: "/paket",
  },
  {
    name: "Galeri",
    link: "/galeri",
  },
  {
    name: "Testimoni",
    link: "/testi",
  },
  {
    name: "Kontak",
    link: "/kontak",
  },
];
function NavbarAdmin() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <nav className="fixed top-0 right-0 w-full bg-white text-black shadow-2xl z-50  ">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            {/*logo*/}
            <div>
              <Link>
                <img src={Logo} alt="" className="h-16" />
              </Link>
            </div>
            {/*menu*/}
            <div className="hidden md:block">
              <ul className="flex items-center gap-6">
                <li className="py-4">
                  <NavHashLink to="/paket" activeClassName="active">
                    Paket
                  </NavHashLink>
                </li>
                <li className="py-4">
                  <NavHashLink to="/galeri" activeClassName="active">
                    Galeri
                  </NavHashLink>
                </li>
                <li className="py-4">
                  <NavHashLink to="/testi" activeClassName="active">
                    Testimoni
                  </NavHashLink>
                </li>
                <li className="py-4">
                  <NavHashLink to="/kontak" activeClassName="active">
                    Kontak
                  </NavHashLink>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <button className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full">Log Out</button>
              <div className="md:hidden block">
                {showMenu ? <HiMenuAlt1 onClick={toggleMenu} className=" cursor-pointer transition-all" size={30} /> : <HiMenuAlt3 onClick={toggleMenu} className="cursor-pointer transition-all" size={30} />}
              </div>
            </div>
          </div>
        </div>
        <ResponsiveAdmin setShowMenu={setShowMenu} showMenu={showMenu} />
      </nav>
    </>
  );
}

export default NavbarAdmin;
