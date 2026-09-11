import Logo from "../../assets/logo-text.png";

function Navbar() {
  return (
    <div className="container mx-auto my-3 flex justify-between items-center">
      <img src={Logo} alt="DevStack" />
      <div>
        <ul className="flex justify-between gap-8">
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
      <div className="flex justify-between gap-4 items-center">
        <button className="cursor-pointer">Sign In</button>
        <button className="btn rounded-2xl bg-[#D91B7E]">Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar;
