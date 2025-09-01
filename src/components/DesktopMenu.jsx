import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function DesktopMenu({ menu, active, setMenuOpened }) {
  const [isHover, setIsHover] = useState(false);

  /* const toggleHoverMenu = () => {
    setIsHover(!isHover);
  }; */

  const subAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.3,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.3,
      },
      transitionEnd: { display: "none" }, // ensures it's hidden after animation
    },
  };

  // check menu has sub meu
  const hasSubMenu = menu?.subMenu?.length > 0;

  return (
    <motion.li
      className="group/link"
      onHoverStart={() => setIsHover(true)} // set explicitly
      onHoverEnd={() => setIsHover(false)} // reset properly
    >
      <NavLink
        key={menu.name}
        to={menu?.path || "#"}
        onClick={() => {
          setMenuOpened(false);
          window.scrollTo(0, 0);
        }}
        className={`${
          active ? "text-black" : "text-white"
        } flex items-center gap-1 cursor-pointer px-3 py-1 rounded-xl hover:bg-white/5`}
      >
        {menu.name}
        {hasSubMenu && (
          <ChevronDown className="mt-[0.6px] group-hover/link:rotate-180 transition-transform duration-200" />
        )}
      </NavLink>

      {hasSubMenu && (
        <motion.div
          className={`${active ? "sub-menu-active" : "sub-menu"}`}
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          variants={subAnimate}
        >
          <div
            className={`grid gap-7 ${
              menu.gridCols === 3
                ? "grid-cols-3"
                : menu.gridCols === 2
                ? "grid-cols-2"
                : "grid-cols-1"
            }`}
          >
            {menu?.subMenu?.map((subMenu, i) => (
              <NavLink
                key={i}
                to={subMenu?.path || "#"}
                onClick={() => {
                  setMenuOpened(false);
                  setIsHover(false);
                  window.scrollTo(0, 0);
                }}
                className="relative cursor-pointer"
              >
                {/* sub menu heading */}
                {menu.gridCols > 1 && menu?.subMenuHeading?.[i] && (
                  <p className="mb-4 text-gray-500">
                    {menu?.subMenuHeading?.[i]}
                  </p>
                )}

                {/* {console.log("subMenu.icon:", subMenu?.icon)} */}

                {/* submenu */}
                <div className="flex items-center text-start gap-x-4 group/menuBox">
                  {/* icon */}
                  <div className="bg-white/5 p-2 rounded-md w-fit group-hover/menuBox:bg-white group-hover/menuBox:text-gray-900 duration-300">
                    {subMenu?.icon && <subMenu.icon />}
                  </div>

                  {/* info */}
                  <div>
                    <h6 className="text-xs font-medium lg:font-semibold lg:text-base">
                      {subMenu?.name}
                    </h6>

                    <p className="text-xs lg:text-sm text-gray-400">
                      {subMenu?.desc}
                    </p>
                  </div>
                </div>
                {/* submenu */}
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </motion.li>
  );
}
