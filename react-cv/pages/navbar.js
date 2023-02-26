import React from "react";
import { useState,useContext } from "react";
import { Context } from "@/Context";

function navbar(props) {
  const { darkMode, setDarkMode } = props;

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };
  return (
    <nav className="py-16 mb-8 flex justify-between dark:text-slate-50 ">
      <h1 className="text-2xl font-semibold font-burtons dark:text-slate-50">
        PORTFOLIO
      </h1>

      <ul className="flex justify-center">
        <li className="p-4">
          <a href="#">Home</a>
        </li>
        <li className="p-4">
          <a href="#">About</a>
        </li>
        <li className="p-4">
          <a href="#">Projects</a>
        </li>
        <li className="p-4 relative">
          <div className="flex items-center">
            <span className="">{darkMode ? "Dark Mode" : "Light Mode"}</span>
            <label htmlFor="dark-mode-toggle">
              <div className="relative ml-3">
                <div className="w-10 h-6 bg-gray-300 rounded-full shadow-inner">
                  <input
                    type="checkbox"
                    id="dark-mode-toggle"
                    className="sr-only"
                    checked={darkMode}
                    onChange={handleDarkModeToggle}
                  />
                </div>
                <div
                  className={`absolute inset-y-0 left-0 w-6 h-6 bg-white rounded-full transition-transform transform ${
                    darkMode ? "translate-x-full" : ""
                  }`}
                ></div>
              </div>
            </label>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default navbar;
