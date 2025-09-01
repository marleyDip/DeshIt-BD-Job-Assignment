import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import { Menus } from "../utils";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [active, setActive] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === "/") {
        setActive(window.scrollY > 10);
      } else {
        setActive(true); // always stay active on other page
      }
      if (window.scrollY > 10) setMenuOpened(false);
    };

    window.addEventListener("scroll", handleScroll);
    // run once to set initial state
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <header
      className={`${
        active ? "bg-white shadow-md" : "bg-transparent"
      } fixed h-20 font-semibold top-0 left-0 ring-0 w-full z-50 transition-all duration-200`}
    >
      <nav className="max-padd-container h-full flex items-center">
        {/* container */}
        <div className="flex items-center justify-between w-full">
          {/* logo & Navbar */}
          <div className="flex items-center gap-3">
            {/* logo */}
            <Link to={"/"}>
              <img
                src={logo}
                alt="companyLogo"
                className={`${active && "invert"} cursor-pointer h-8 w-[142px]`}
              />
            </Link>
            {/* logo */}

            {/* Desktop menu */}
            <ul className="md:flex md:items-center hidden gap-x-1">
              {Menus.map((menu) => (
                <DesktopMenu
                  menu={menu}
                  key={menu.name}
                  active={active}
                  setMenuOpened={setMenuOpened}
                />
              ))}
            </ul>
            {/* Desktop menu */}
          </div>
          {/* logo & Navbar */}

          {/* button */}
          <div className="hidden md:flex md:items-center gap-x-2">
            <button
              className={`${
                !active ? "text-white" : "text-black"
              } py-[10px] px-[18px] w-21 h-11 rounded-lg font-semibold cursor-pointer`}
            >
              Log in
            </button>

            <button className="py-[10px] px-[18px] rounded-lg shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] text-white bg-[#7F56D9] border-1 border-[#7F56D9] w-24 h-11 cursor-pointer">
              Sign up
            </button>
            {/* button */}
          </div>

          {/* mobile meu */}
          <div className="md:hidden">
            <MobileMenu
              Menus={Menus}
              active={active}
              setMenuOpened={setMenuOpened}
            />
          </div>
          {/* mobile meu */}
        </div>
        {/* container */}
      </nav>
    </header>
  );
};

export default Header;
