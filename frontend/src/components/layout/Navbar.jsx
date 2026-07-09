import { Menu, X, SquareTerminal } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    "Features",
    "Career",
    "Academics",
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#1B2434] bg-[#08111F]/95 backdrop-blur-lg">
         <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center px-10">

        {/* Logo */}

        <div className="flex items-center gap-2">

          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#2A3A55] bg-[#0F1B30]">

            <SquareTerminal
  size={18}
  className="text-[#AFC4FF]"
/>

          </div>

          <h1 className="text-[18px] font-bold tracking-tight text-white">
            StudyOS
          </h1>

        </div>

        {/* Desktop */}

        {/* Right Section */}

<div className="ml-auto hidden items-center gap-12 md:flex">

  <nav className="flex items-center gap-8">

    {navLinks.map((item) => (

      <a
        key={item}
        href="#"
        className="text-sm font-medium text-gray-300 transition duration-200 hover:text-white"
      >
        {item}
      </a>

    ))}

  </nav>

  <button className="rounded-xl bg-[#B8C8FF] px-7 py-2.5 text-sm font-medium text-[#08111F] shadow-sm transition-all duration-200 hover:bg-[#C7D4FF]">
    Get Started
  </button>

</div>

        {/* Mobile */}

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

      </div>

      {isOpen && (

        <div className="border-t border-white/10 bg-[#08111F] md:hidden">

          {navLinks.map((item) => (

            <a
              key={item}
              href="#"
              className="block px-8 py-4 text-gray-300 hover:text-white"
            >
              {item}
            </a>

          ))}

          <div className="p-8 pt-2">

            <button
              className="w-full rounded-xl bg-[#B8C8FF] py-3 text-black"
            >
              Get Started
            </button>

          </div>

        </div>

      )}

    </header>
  );
}

export default Navbar;