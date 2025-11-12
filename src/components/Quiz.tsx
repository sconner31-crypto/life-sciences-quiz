import React, { useState } from "react";
import questionsData from "../data/questions.json";
import endingCardsData from "../data/endingCards.json";
import { motion, AnimatePresence } from "framer-motion";
import Intro from "./Intro";

interface Answer {
  id: string;
  text: string;
  traits: string[];
}

interface Question {
  id: string;
  text: string;
  isMultipleChoice: boolean;
  answers: Answer[];
}

interface EndingCard {
  id: string;
  title: string;
  description: string;
  traits: string[];
  threshold: number;
  url?: string;
  image?: string;
}

const Quiz: React.FC = () => {
  const questions = questionsData as Question[];
  const endingCards = endingCardsData as EndingCard[];

  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTraits, setSelectedTraits] = useState<string[]>([]);
  const [results, setResults] = useState<EndingCard[] | null>(null);

  const handleAnswer = (traits: string[]) => {
    setSelectedTraits((prev) => [...prev, ...traits]);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      evaluateResults([...selectedTraits, ...traits]);
    }
  };

  const evaluateResults = (traits: string[]) => {
    const counts = traits.reduce<Record<string, number>>((acc, trait) => {
      acc[trait] = (acc[trait] || 0) + 1;
      return acc;
    }, {});

    const matched = endingCards.filter((card) => {
      const score = card.traits.reduce((sum, trait) => sum + (counts[trait] || 0), 0);
      return score >= card.threshold;
    });

    setResults(matched);
  };

  const restart = () => {
    setStarted(false);
    setCurrentIndex(0);
    setSelectedTraits([]);
    setResults(null);
  };

  // 🟢 1. Intro screen
  if (!started) return <Intro onStart={() => setStarted(true)} />;

  // 🟢 2. Results screen
  if (results) {
    return (
      <div className="flex justify-center px-4 mt-8">
        <div className="space-y-6 max-w-4xl w-full text-left">
          <div className="border border-gray-200 rounded-lg p-4 bg-white/90 shadow-sm backdrop-blur">
            <h2 className="text-xl font-medium">Your recommended courses</h2>
          </div>

          {results.length > 0 ? (
            results.map((res) => (
              <div
                key={res.id}
                className="space-y-2 max-w-4xl w-full text-left border border-gray-200 rounded-lg p-6 bg-white/90 shadow-sm backdrop-blur"
              >
                <h3 className="font-regular text-lg">{res.title}</h3>

                <div className="flex flex-col md:flex-row md:items-start md:gap-6">
                  {res.image && (
                    <div className="w-full md:w-40 md:order-2">
                      <img
                        src={res.image}
                        alt={res.title}
                        className="w-full h-auto object-cover rounded"
                      />
                    </div>
                  )}

                  <div className="flex-1">
                    <p className="text-black-700 mt-2">{res.description}</p>

                    {res.url && (
                      <a
                        href={res.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 text-imperialBlue underline hover:text-imperialBlack"
                      >
                        View the course page on the Imperial website
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-black-700">
              No strong matches found. You may wish to explore courses directly.
            </p>
          )}

          {/* Restart button - left aligned */}
          <button
            onClick={restart}
            className="bg-imperialBlue text-white px-5 py-2 rounded hover:bg-imperialBlack transition"
          >
            Restart quiz
          </button>
        </div>
      </div>
    );
  }

  // 🟢 3. Question screen
  const current = questions[currentIndex];

  return (
    <div className="flex flex-col items-start px-4 mt-8 space-y-6 max-w-4xl w-full mx-auto">
      {/* Question card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="w-full border border-gray-200 rounded-lg p-6 bg-white/90 shadow-sm backdrop-blur"
        >
          {/* Progress Bar */}
          <div className="mb-4">
            <div className="text-sm text-gray-600 mb-1">
              Question {currentIndex + 1} of {questions.length}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-imperialBlue h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${((currentIndex + 1) / questions.length) * 100}%`,
                }}
              />
            </div>
          </div>

          <h2 className="text-xl font-regular mt-6">{current.text}</h2>

          <div className="flex flex-col items-left gap-4 mt-6">
            {current.answers.map((ans) => (
              <button
                key={ans.id}
                onClick={() => handleAnswer(ans.traits)}
                className="w-full md:w-3/4 px-6 py-3 rounded bg-imperialBlue text-white hover:bg-imperialBlack transition text-left"
              >
                {ans.text}
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Restart button below, fades in cleanly without layout shift */}
      <AnimatePresence mode="wait">
        <motion.button
          key={`restart-${current.id}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.15 }} // subtle delay for polish
          onClick={restart}
          className="bg-imperialBlue text-white px-5 py-2 rounded hover:bg-imperialBlack transition"
        >
          Restart quiz
        </motion.button>
      </AnimatePresence>
    </div>
  );
};

export default Quiz;
