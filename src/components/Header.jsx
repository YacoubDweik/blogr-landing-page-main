import logo from "/src/images/logo.svg";
import menuIcon from "/src/images/icon-hamburger.svg";
import closeIcon from "/src/images/icon-close.svg";
import lightArrow from "/src/images/icon-arrow-light.svg";
import darkArrow from "/src/images/icon-arrow-dark.svg";
import { useState } from "react";
import Menu from "./Menu";

function Header() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuToggle = (name) => {
    setActiveMenu(activeMenu === name ? null : name);
  };

  return (
    <header className="flex justify-between items-end min-h-[10vh] relative md:gap-16">
      <a href="#">
        <img src={logo} alt="" />
      </a>
      <div className="md:grow-1">
        <button className="cursor-pointer md:hidden" onClick={() => setIsExpanded((prev) => !prev)}>
          {!isExpanded && <img src={menuIcon} alt="ham" />}
          {isExpanded && <img src={closeIcon} alt="close" />}
        </button>
        <nav>
          {isExpanded && (
            <div className="mobile-nav absolute -bottom-8 left-0 translate-y-full bg-white w-full text-center py-8 px-4 rounded-lg space-y-8 text-titles text-xl font-semibold">
              <ul className="space-y-8">
                <Menu name="product" arrow={darkArrow} activeMenu={activeMenu} onToggle={handleMenuToggle} />
                <Menu name="company" arrow={darkArrow} activeMenu={activeMenu} onToggle={handleMenuToggle} />
                <Menu name="connect" arrow={darkArrow} activeMenu={activeMenu} onToggle={handleMenuToggle} />
              </ul>
              <div className="h-0.5 bg-gray-200 mx-4"></div>
              <ul className="space-y-8">
                <li>
                  <a href="#">Login</a>
                </li>
                <li>
                  <a
                    className="transition-all duration-200 hover:brightness-75 inline-block font-[Ubuntu] bg-linear-to-r from-first-value-red to-second-value-red text-white py-4 px-16 rounded-[100px]"
                    href="#">
                    Sign Up
                  </a>
                </li>
              </ul>
            </div>
          )}
          <div className="desktop-nav hidden text-white font-semibold md:flex md:justify-between md:items-center md:gap-4">
            <ul className="flex justify-center items-center gap-4 md:gap-8">
              <Menu name="product" arrow={lightArrow} activeMenu={activeMenu} onToggle={handleMenuToggle} />
              <Menu name="company" arrow={lightArrow} activeMenu={activeMenu} onToggle={handleMenuToggle} />
              <Menu name="connect" arrow={lightArrow} activeMenu={activeMenu} onToggle={handleMenuToggle} />
            </ul>
            <ul className="flex justify-center items-center gap-4">
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a
                  className="font-[Ubuntu] transition-all duration-200 hover:bg-light-cta-hover hover:text-white font-bold bg-white text-red-cta-text border-2 border-transparent py-2 px-4 rounded-[100px]"
                  href="#">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
