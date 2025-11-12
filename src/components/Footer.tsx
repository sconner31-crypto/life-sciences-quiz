import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full flex justify-center">
      <div className="bg-imperialBlack/90 text-white backdrop-blur w-full max-w-6xl px-4 text-center py-4">
        <p>
          © {new Date().getFullYear()} Imperial College London - Department of Life Sciences
        </p>
      </div>
    </footer>
  );
};

export default Footer;
