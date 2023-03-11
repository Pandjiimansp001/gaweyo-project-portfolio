import React from "react";
import pandji from "../../assets/pandji_profile.png";

const Header = () => {
  return (
    <header>
      <div className="relative w-full h-[400px] bg-dark flex justify-center">
        <div className="flex flex-col items-center">
          <div className="text-primary text-5xl font-semibold pt-12">
            Welcome to Gaweyo Project Portfolio
          </div>
          <p className="text-white text-2xl pt-4">
            Created by Pandji Iman Syach Putra
          </p>
        </div>
        <img
          src={pandji}
          alt=""
          className="absolute w-72 h-72 bg-primary rounded-full top-60 object-cover"
        />
      </div>
    </header>
  );
};

export default Header;
