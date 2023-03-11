import React from "react";

const About = () => {
  return (
    <section>
      <div className="flex-col justify-center p-48">
        <div className="flex justify-center">
          <div className="flex-col text-center">
            <div className="text-3xl font-semibold text-dark">
              About Experience
            </div>
            <div className="w-72 border-b-4 border-1 border-dark pt-12"></div>
          </div>
        </div>
        <div className="pt-8 flex items-center justify-center">
          <div className="text-3xl tracking-widest text-center">
            At refourma, I did an internship as a front end web developer for 3
            months. I managed to complete the 1 month React js programming
            training provided by the company and after that I started working on
            real projects. I also managed to complete 50+ work tasks for company
            projects well. The technologies that I use include reactjs, tailwind
            css, and the use of git in working on the project.
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
