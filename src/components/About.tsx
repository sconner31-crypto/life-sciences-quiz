import React from "react";

const About: React.FC = () => {
  return (
    <div className="flex justify-center px-4 mt-8">
      <div className="space-y-4 max-w-3xl w-full text-left border border-gray-200 rounded-lg p-8 bg-white/90 shadow-sm backdrop-blur">
        <h2 className="text-xl font-medium">About this quiz</h2>
        <p>
          The Life Sciences course chooser app was designed to help prospective students explore our range of Master's programmes within the Department of Life Sciences at Imperial College London.
        </p>
        <p>
          By answering a short series of questions about your interests, skills and study preferences, you’ll be guided towards the courses that may best align with your goals.
        </p>
        <p>
          The quiz is for guidance only - we always recommend reading the full course descriptions and entry requirements on the course pages linked from the {" "}
          <a
            href="https://www.imperial.ac.uk/life-sciences/postgraduate/masters-courses/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-imperialBlue underline hover:text-imperialBlack"
          >
            Department of Life Sciences website
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
