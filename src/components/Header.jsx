import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

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
      if (window.scrollY > 10) {
        setMenuOpened(false);
      }
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
        active ? "bg-white shadow-md py-3" : "py-4"
      } fixed top-0 left-0 ring-0 w-full z-50 transition-all duration-200`}
    >
      <div className="max-padd-container"></div>
    </header>
  );
};

export default Header;
