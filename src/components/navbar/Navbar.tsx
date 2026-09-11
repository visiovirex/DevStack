import { useState } from "react";
import Logo from "../../assets/logo-text.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log("Clicked");
  };

  return (
    <div className="container mx-auto my-3 px-4">
      <div className="flex items-center justify-between">
        <button
          onClick={handleMenu}
          className="order-1 text-2xl cursor-pointer md:hidden"
        >
          ☰
        </button>

        <img className="order-2 md:order-1" src={Logo} alt="DevStack" />

        <div className="hidden md:block md:order-2">
          <ul className="flex items-center gap-8">
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

        <div className="hidden md:flex md:order-3 items-center gap-4">
          <button className="cursor-pointer">Sign In</button>
          <button className="btn rounded-2xl bg-[#D91B7E]">Sign Up</button>
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

          <div className="mt-5 flex items-center gap-4">
            <button className="cursor-pointer">Sign In</button>
            <button className="btn rounded-2xl bg-[#D91B7E]">Sign Up</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
