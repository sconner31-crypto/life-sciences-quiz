import React from "react";

interface IntroProps {
  onStart: () => void;
}

const Intro: React.FC<IntroProps> = ({ onStart }) => {
  return (
    <div className="flex justify-center px-4 mt-8">
      <div className="space-y-6 max-w-3xl w-full text-left border border-gray-200 rounded-lg p-8 bg-white/90 shadow-sm backdrop-blur">
        <h2 className="text-xl font-medium">Welcome to the Life sciences course chooser</h2>
        <p>
          This quick quiz will help you discover which Life Sciences courses at Imperial might best
          match your interests and career ambitions. Simply answer a few questions and see your
          personalised course recommendations at the end.
        </p>
        <p className="text-gray-700">
          It only takes a few minutes and you can restart anytime.
        </p>
        <button
          onClick={onStart}
          className="mt-4 bg-imperialBlue text-white px-5 py-3 rounded hover:bg-imperialBlack transition"
        >
          Start quiz
        </button>
      </div>
    </div>
  );
};

export default Intro;
