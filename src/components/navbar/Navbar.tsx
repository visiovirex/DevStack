import { useState } from "react";
import Logo from "../../assets/logo-text.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="sticky top-0 z-50 bg-white container mx-auto my-3 px-4">
      <div className="flex items-center justify-between">
        <button
          onClick={handleMenu}
          className="order-1 cursor-pointer text-2xl md:hidden"
        >
          ☰
        </button>

        <img
          className="order-2 w-24 sm:w-28 md:order-1 md:w-auto"
          src={Logo}
          alt="DevStack"
        />

        <div className="hidden md:order-2 md:block">
          <ul className="flex items-center gap-4 lg:gap-8">
            <li>
              <a className="text-[#D91B7E]" href="#">
                Home
              </a>
            </li>
            <li>
              <a href="#">Technologies</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="order-3 flex items-center gap-2 md:order-3 md:gap-4">
          <button className="cursor-pointer text-xs sm:text-sm">Sign In</button>

          <button className="btn rounded-2xl bg-[#D91B7E] px-3 text-xs text-white sm:px-4 sm:text-sm">
            Sign Up
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mt-4 border-t pt-4 md:hidden">
          <ul className="flex flex-col gap-4">
            <li>
              <a className="text-[#D91B7E]" href="#">
                Home
              </a>
            </li>
            <li>
              <a href="#">Technologies</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
