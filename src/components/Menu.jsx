import { useState } from "react";

function Menu(props) {
  const isExpanded = props.activeMenu === props.name;

  const handleClick = () => {
    props.onToggle(props.name);
  };

  return (
    <li
      className={`transition-all duration-100 ${isExpanded ? "opacity-75" : ""} cursor-pointer md:relative md:opacity-100`}
      onClick={handleClick}>
      {props.name == "product" && (
        <>
          <span className="flex items-center gap-3 justify-center">
            Product
            <img
              className={`${isExpanded ? "rotate-180" : ""} transition-all duration-200 rotate-0`}
              src={props.arrow}
              alt=""
            />
          </span>

          <ul
            className={`${isExpanded ? "block" : "hidden"} space-y-2 bg-gray-200 md:bg-white md:text-titles md:m-0 rounded-lg p-4 m-4 md:absolute md:-bottom-2 md:left-1/2 md:-translate-x-1/2 md:translate-y-full`}>
            <li className="w-fit mx-auto transition-all duration-200 hover:contrast-200">
              <a href="#">Overview</a>
            </li>
            <li className="w-fit mx-auto transition-all duration-200 hover:contrast-200">
              <a href="#">Pricing</a>
            </li>
            <li className="w-fit mx-auto transition-all duration-200 hover:contrast-200">
              <a href="#">Marketplace</a>
            </li>
            <li className="w-fit mx-auto transition-all duration-200 hover:contrast-200">
              <a href="#">Features</a>
            </li>
            <li className="w-fit mx-auto transition-all duration-200 hover:contrast-200">
              <a href="#">Integrations</a>
            </li>
          </ul>
        </>
      )}

      {props.name == "company" && (
        <>
          <span className="flex items-center gap-3 justify-center">
            Company
            <img
              className={`${isExpanded ? "rotate-180" : ""} transition-all duration-200 rotate-0`}
              src={props.arrow}
              alt=""
            />
          </span>

          <ul
            className={`${isExpanded ? "block" : "hidden"} space-y-2 bg-gray-200 md:bg-white md:text-titles md:m-0 rounded-lg p-4 m-4 md:absolute md:-bottom-2 md:left-1/2 md:-translate-x-1/2 md:translate-y-full`}>
            <li className="w-fit mx-auto transition-all duration-200 hover:contrast-200">
              <a href="#">About</a>
            </li>
            <li className="w-fit mx-auto transition-all duration-200 hover:contrast-200">
              <a href="#">Team</a>
            </li>
            <li className="w-fit mx-auto transition-all duration-200 hover:contrast-200">
              <a href="#">Blog</a>
            </li>
            <li className="w-fit mx-auto transition-all duration-200 hover:contrast-200">
              <a href="#">Careers</a>
            </li>
          </ul>
        </>
      )}

      {props.name == "connect" && (
        <>
          <span className="flex items-center gap-3 justify-center">
            Connect
            <img
              className={`${isExpanded ? "rotate-180" : ""} transition-all duration-200 rotate-0`}
              src={props.arrow}
              alt=""
            />
          </span>

          <ul
            className={`${isExpanded ? "block" : "hidden"} space-y-2 bg-gray-200 md:bg-white md:text-titles md:m-0 rounded-lg p-4 m-4 md:absolute md:-bottom-2 md:left-1/2 md:-translate-x-1/2 md:translate-y-full`}>
            <li className="w-fit mx-auto transition-all duration-200 hover:contrast-200">
              <a href="#">Contact</a>
            </li>
            <li className="w-fit mx-auto transition-all duration-200 hover:contrast-200">
              <a href="#">Newsletter</a>
            </li>
            <li className="w-fit mx-auto transition-all duration-200 hover:contrast-200">
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </>
      )}
    </li>
  );
}

export default Menu;
