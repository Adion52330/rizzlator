import React from "react";

const Header = () => {
  return (
    <div className="z-1 max-w-6xl mx-auto border-b-2 border-b-gray-400 bg-opacity-40 backdrop-blur-md drop-shadow-lg flex flex-col items-center rounded-b-2xl bg-gray-800 py-4 justify-center">
      <h1 className="text-white text-4xl font-bold pb-2 shadow-emerald-700">
        The Rizzlator
      </h1>
      <p className="text-sm text-gray-300">
        Find rizz pickup lines in seconds.
      </p>
    </div>
  );
};

export default Header;
