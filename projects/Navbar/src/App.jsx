import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "About us", "Contact", "Services", "Profile"];

  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="flex justify-between items-center border-b-2 border-gray-200 p-5 max-w-7xl mx-auto">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">Logo</div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-9">
            {navItems.map((item) => (
              <li
                key={item}
                className="hover:text-blue-600 cursor-pointer font-medium transition"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-50 flex flex-col items-center">
            <ul className="flex flex-col gap-6 p-5 text-center w-full">
              {navItems.map((item) => (
                <li
                  key={item}
                  className="hover:text-blue-600 cursor-pointer font-medium text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default App;
