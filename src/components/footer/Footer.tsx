import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Logo from "../../assets/logo-text.png";

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-start">
        <div className="text-center sm:text-left md:col-span-1">
          <div>
            <img className="w-27 mx-auto sm:mx-0" src={Logo} alt="SevStack" />

            <p className="mt-3 max-w-xs mx-auto sm:mx-0 leading-5 text-gray-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="mt-4 flex items-center justify-center sm:justify-start gap-4 text-gray-600">
              <a className="flex items-center gap-1" href="#">
                <FaGithub /> GitHub
              </a>
              <a className="flex items-center gap-1" href="#">
                <FaTwitter /> Twitter
              </a>
              <a className="flex items-center gap-1" href="#">
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="hidden sm:block">
          <h3 className="font-semibold uppercase">Product</h3>
          <ul className="mt-3 space-y-2 text-gray-500">
            <li><a href="#">Home</a></li>
            <li><a href="#">Technologies</a></li>
            <li><a href="#">Projects</a></li>
          </ul>
        </div>

        <div className="hidden sm:block">
          <h3 className="font-semibold uppercase">Company</h3>
          <ul className="mt-3 space-y-2 text-gray-500">
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        <div className="hidden sm:block">
          <h3 className="font-semibold uppercase">Legal</h3>
          <ul className="mt-3 space-y-2 text-gray-500">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-8 flex flex-col gap-3 border-t border-gray-200 pt-5 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Dev Stack. All rights reserved.</p>

        <div className="flex gap-5">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;