import React from "react";
import SlideShow from "./SlideShow";

const Portfolio = () => {
  return (
    <section>
      <div className="flex-col justify-center p-48 pt-8">
        <div className="flex justify-center">
          <div className="flex-col text-center">
            <div className="text-3xl font-semibold text-dark">Portfolio</div>
            <div className="w-72 border-b-4 border-1 border-dark pt-12"></div>
          </div>
        </div>
        <SlideShow />
      </div>
    </section>
  );
};

export default Portfolio;
