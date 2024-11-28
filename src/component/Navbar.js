import React, { useState } from "react";
import { Link } from "react-router-dom";
import navlogo from "../assets/image/navlogo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="absolute w-full" >
      <nav className="flex items-center justify-between p-4 ng-transparent">
        <img src={navlogo} />
        {/* <div className="text-white text-lg font-bold">Logo</div> */}

        {/* Links */}
        <div className="flex-grow flex justify-center hidden md:flex space-x-4 black">
          <Link to="/">About us</Link>
          <Link to="/services">Services</Link>
          <Link to="/usecase">Use Cases</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/blog">Blog</Link>
        </div>

        {/* Button on Right Side */}
        <div className="hidden md:block">
          <button className=" text-black px-4 py-2 border-2 border-black rounded">
            Request a quote
          </button>
        </div>

        {/* Toggle Button for Mobile Menu */}
        <button
          aria-expanded={isOpen}
          type="button"
          className="group relative h-6 w-6 md:hidden"
          onClick={toggleMenu}
          style={{
            "--width": "1.25rem",
            "--thickness": "0.125rem",
            "--gap": "0.25rem",
            "--color": "#fff",
            "--duration": "300ms",
          }}
        >
          <span
            className={`absolute left-1/2 top-1/2 h-[var(--thickness)] w-[var(--width)] -translate-x-1/2 translate-y-[calc(-150%-var(--gap))] transition-transform duration-[calc(var(--duration)*2/3)] before:absolute before:right-0 before:h-full before:w-full before:rounded-full before:bg-[var(--color)] before:transition-[width] before:delay-[calc(var(--duration)*1/3)] before:duration-[calc(var(--duration)*2/3)] group-aria-expanded:-translate-y-1/2 group-aria-expanded:-rotate-45 group-aria-expanded:delay-[calc(var(--duration)*1/3)] before:group-aria-expanded:w-[60%] before:group-aria-expanded:delay-0`}
          ></span>
          <span
            className={`absolute left-1/2 top-1/2 h-[var(--thickness)] w-[var(--width)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color)] transition-transform duration-[calc(var(--duration)*2/3)] group-aria-expanded:rotate-45 group-aria-expanded:delay-[calc(var(--duration)*1/3)]`}
          ></span>
          <span
            className={`absolute left-1/2 top-1/2 h-[var(--thickness)] w-[var(--width)] -translate-x-1/2 translate-y-[calc(50%+var(--gap))] transition-transform duration-[calc(var(--duration)*2/3)] before:absolute before:right-0 before:h-full before:w-[60%] before:rounded-full before:bg-[var(--color)] before:transition-[right] before:delay-[calc(var(--duration)*1/3)] before:duration-[calc(var(--duration)*2/3)] group-aria-expanded:-translate-y-1/2 group-aria-expanded:-rotate-45 group-aria-expanded:delay-[calc(var(--duration)*1/3)] before:group-aria-expanded:right-[40%] before:group-aria-expanded:delay-0`}
          ></span>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="absolute top-16 left-0 right-0 bg-gray-800 p-4 md:hidden"
            style={{ top: "60px" }}
          >
            <div className="flex flex-col items-center">
              <Link to="about">About us</Link>
              <Link to="/services">Services</Link>
              <Link to="/usecase">Use Cases</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/blog">Blog</Link>
              <button className=" text-black px-4 py-2 border-2 border-black rounded">
                Request a quote
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
