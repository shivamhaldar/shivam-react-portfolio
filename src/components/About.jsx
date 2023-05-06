import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-5 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-l mt-10">
        I'm a front-end developer with a passion for creating beautiful and intuitive 
        user interfaces that bring websites and applications to life. I specialize in HTML,
         CSS, JavaScript and ReactJS, and I'm always looking for new ways to leverage the latest 
         technologies and techniques to enhance the user experience.
        </p>

        <br />

        <p className="text-sm">
        With several years of experience in the field, I've developed a strong understanding of responsive design principles, and I'm adept at crafting interfaces that look and function flawlessly across a range of devices and screen sizes. I'm also committed to staying up-to-date with the latest trends and best practices in web development, and I'm constantly seeking out new opportunities to learn and grow in my craft.
        </p>
        <br />
        <p className="text-sm">
        One of my greatest strengths is my ability to collaborate effectively with designers, back-end developers, and other stakeholders to deliver high-quality projects on time and on budget. I'm a strong communicator and problem-solver, and I pride myself on my ability to turn complex technical requirements into elegant and user-friendly solutions.        </p>
        <br/>
        <p className="text-sm">
        Whether I'm working on a small-scale project or a large-scale enterprise application, my goal is always the same: to create a seamless and enjoyable user experience that leaves a lasting impression on users. I'm passionate about what I do, and I'm always looking for new challenges and opportunities to make a positive impact in the world of web development.s.
        </p>
      </div>
    </div>
  );
};

export default About;
