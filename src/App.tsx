import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Quiz from "./components/Quiz";
import About from "./components/About";

const App: React.FC = () => {
  return (
    <div className="relative z-10 flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <main className="flex-grow container mx-auto px-4 pt-12 pb-8">
        <Routes>
          <Route path="/" element={<Quiz />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
