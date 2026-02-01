import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation(); 

  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex flex-col w-full border-b">
          <h1 className="text-lg uppercase mx-auto font-semibold my-2">
            Coming soon
          </h1>
        </div>
      </div>

      <div>
        <img
          className="w-[95px] h-31.25 mx-auto py-4"
          src="images/logo.webp"
          alt=""
        />
      </div>

      <div className="w-full flex justify-center md:hidden">
        <button onClick={() => setOpen(!open)} className="text-2xl">
          ☰
        </button>
      </div>

      <div
        className={`w-full justify-center gap-4 ${
          open ? "flex flex-col items-center md:flex-row" : "hidden md:flex"
        } md:flex`}
      >
        {["Home", "About Us"].map((item, index) => {
          const path = item === "Home" ? "/" : "/about";
          const isActive = location.pathname === path;

          return (
            <Link
              key={index}
              to={path}
              className={`capitalize text-2xl text-gray-900 font-lighter hover:opacity-60 transition-opacity ${
                isActive ? "border-b-2 border-gray-900" : ""
              }`}
              onClick={() => setOpen(false)}
            >
              {item}
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Navbar;
