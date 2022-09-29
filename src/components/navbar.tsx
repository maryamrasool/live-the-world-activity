import React from "react";

const NavLinks = ["Destinations", "Interests", "My Trips", "Map"];
const Navbar = () => {
  return (
    <div className="flex px-4 py-1 justify-between items-center shadow-md">
      <div
        className="w-28 md:w-20 h-8 md:h-12"
        style={{
          backgroundImage: "url(/images/logo.svg)",
          backgroundOrigin: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="uppercase text-sm text-dark-blue font-bold invisible md:visible">
        {NavLinks.map((navLink) => {
          return <span className="ml-5">{navLink}</span>;
        })}

        <button className="ml-5 bg-red text-white uppercase px-3.5 py-1.5 rounded-full">
          Sign Up
        </button>
        <button className="ml-5 text-red uppercase px-3.5 py-1.5 rounded-full border-2 border-red">
          Log In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
