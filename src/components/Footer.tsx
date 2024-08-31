import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#090a36] text-white py-4">
      <div className="mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <p className="text-sm">
              &copy; 2024 SkySphere. All rights reserved.
            </p>
          </div>

          <nav>
            <ul className="flex items-center space-x-4">
              <li className="text-sm">About</li>
              <li className="text-sm">Privacy Policy</li>
              <li className="flex space-x-3">
                <span className="text-lg">
                  <FaTwitter />
                </span>
                <span className="text-lg">
                  <FaInstagram />
                </span>
                <span className="text-lg">
                  <FaLinkedin />
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
