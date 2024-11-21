import React, { useState } from 'react';

function Header() {
  // State to track the mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-800 text-white py-4 px-6">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">TeenPatti</div>
        <div>
          <ul className="flex space-x-6 text-lg hidden md:flex">
            <li>Home</li>
            <li>Games</li>
            <li>App</li>
            <li>News</li>
          </ul>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white" onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <ul className="space-y-4">
            <li>Home</li>
            <li>Games</li>
            <li>App</li>
            <li>News</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
