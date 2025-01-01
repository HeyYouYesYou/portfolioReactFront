import { NavLink } from "react-router-dom";

import { routesPathList } from "../../routesPathList";
import { useState } from "react";

export default function Header() {
  const [isVisible, toggleVisible] = useState(false);

  const handlerMenuVisibility = (event) => {
    event.preventDefault();
    toggleVisible((prevState) => !prevState);
  };

  const BurgerButton = () => {
    const hamburgerLine = `bg-black inline-block  transform transition-all  duration-1000
            h-0.5 w-6 rounded-sm`;
    return (
      <button
        onClick={(event) => handlerMenuVisibility(event)}
        className="flex flex-col hover:animate-pulse  items-center justify-center  "
      >
        <div
          className={`${hamburgerLine} ${
            isVisible ? "rotate-45  translate-y-1" : "-translate-y-1"
          }`}
        ></div>
        <span
          className={`my-0.5 ${hamburgerLine} ${
            isVisible ? "opacity-0" : "opacity-100 "
          }`}
        ></span>
        <span
          className={`${hamburgerLine} ${
            isVisible ? "-rotate-45 -translate-y-1" : "translate-y-1"
          }`}
        ></span>
      </button>
    );
  };

  const navMenu = routesPathList.map((route) => {
    return (
      <li
        className="w-max"
        key={route.path}
        onClick={(event) => handlerMenuVisibility(event)}
      >
        <NavLink to={route.path}>{route.label}</NavLink>
      </li>
    );
  });

  return (
    <header
      className={`z-30 p-2 flex flex-col justify-around  lg:hidden sticky top-0   bg-LimeGray `}
    >
      <div className="flex justify-between">
        <div>
          <h3 className="inline-block text-2xl">portfolio</h3>
        </div>
        <BurgerButton />
      </div>
      <nav
        className={`overflow-hidden  duration-300 ease-out transition-max-height  ${
          isVisible ? "max-h-48" : "max-h-0"
        }`}
      >
        <ul className={`flex flex-col items-center text-2xl `}>{navMenu}</ul>
      </nav>
    </header>
  );
}
