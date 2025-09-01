import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function MobileMenu({ Menus, active, setMenuOpened }) {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setIsClicked] = useState(null);

  const toggleDrawer = () => {
    if (isOpen) {
      setIsOpen(false);
      setIsClicked(null); // reset submenu state when closing
    } else {
      setIsOpen(true);
    }
  };

  const closeDrawer = () => {
    setIsOpen(false);
    setIsClicked(null); // reset submenu state
  };

  // toggle sub menu item
  const subMenuDrawer = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: 0,
      overflow: "hidden",
    },
  };

  return (
    <div>
      <button className="z-[999] relative" onClick={toggleDrawer}>
        {isOpen ? (
          <X
            className={`${
              active && "invert"
            } transform hover:rotate-180 transition-transform duration-200 ease-in-out`}
          />
        ) : (
          <Menu className={`${active && "invert"}`} />
        )}
      </button>

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        className="fixed left-0 top-20 right-0 overflow-y-auto h-full p-6 backdrop-blur bg-[#53389E] text-white"
      >
        <ul>
          {Menus?.map(({ name, subMenu, path }, i) => {
            // checking if sub menu exist
            const hasSubMenu = subMenu?.length > 0;
            // checking if menu is clicked
            const isClicked = clicked === i;

            return (
              <li key={name}>
                <NavLink
                  to={path || "#"}
                  className="flex items-center justify-between p-4 hover:bg-white/5 rounded-md cursor-pointer relative"
                  // toggle sub menu item open
                  onClick={() => {
                    if (hasSubMenu) {
                      setIsClicked(isClicked ? null : i);
                    } else {
                      closeDrawer(); // closes menu when no submenu
                    }
                    setMenuOpened(false); // always close parent menu
                    window.scrollTo(0, 0); // always scroll to top
                  }}
                >
                  {name}
                  {hasSubMenu && (
                    <ChevronDown
                      className={`ml-auto ${isClicked && "rotate-180"} `}
                    />
                  )}
                </NavLink>

                {hasSubMenu && (
                  <motion.ul
                    initial="exit"
                    animate={isClicked ? "enter" : "exit"}
                    variants={subMenuDrawer}
                    className="ml-5"
                  >
                    {subMenu?.map(({ name, icon: Icon, path }) => (
                      <li
                        key={name}
                        onClick={() => {
                          closeDrawer(); //  closes menu after clicking submenu
                          setMenuOpened(false); // also close parent menu
                          window.scrollTo(0, 0); // scroll to top
                        }}
                        className="p-2 flex items-center hover:bg-white/5 rounded-md cursor-pointer gap-x-2"
                      >
                        {Icon && <Icon size={17} />}
                        <NavLink to={path || "#"}>{name}</NavLink>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
}
