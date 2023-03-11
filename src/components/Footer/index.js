import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="w-full bg-dark h-[200px] flex items-center justify-center">
        <div className="text-white text-2xl font-semibold">
          Copyright &copy; 2023 -{" "}
          <script>document.write(new Date().getFullYear())</script> Pandji Iman
          Syach Putra All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
