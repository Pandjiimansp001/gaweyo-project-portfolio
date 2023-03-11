import React from "react";
import gallery1 from "../../assets/gallery1.jpeg";
import gallery2 from "../../assets/gallery2.jpeg";

const Gallery = () => {
  return (
    <section>
      <div className="flex-col justify-center p-48 pt-8">
        <div className="flex justify-center">
          <div className="flex-col text-center">
            <div className="text-3xl font-semibold text-dark">Gallery</div>
            <div className="w-72 border-b-4 border-1 border-dark pt-12"></div>
          </div>
        </div>
        <div className="flex flex-col items-center pt-12 gap-8">
          <img
            src={gallery1}
            alt="Refourma"
            className="w-[800px] rounded-lg shadow-lg"
          />
          <img
            src={gallery2}
            alt="Refourma"
            className="w-[800px] rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
