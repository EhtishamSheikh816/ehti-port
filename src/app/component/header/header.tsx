import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="flex fixed w-full justify-end bg-[#111827] text-[#D1D5DB] p-[5px]">
        <div className="pr-[40%] text-[23px] font-extrabold">
          <h1>
            <span className="text-orange-600">EHTI</span>SHAM
          </h1>
        </div>
        <div className="pt-[5px]">
          <ul className="flex gap-10 text-[16px] mr-3">
            <li className="hover:text-navColor transition duration-300">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-navColor transition duration-300">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-navColor transition duration-300">
              <a href="#">Project</a>
            </li>
            <li className="hover:text-navColor transition duration-300">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;