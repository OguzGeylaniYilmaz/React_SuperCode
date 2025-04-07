import { useState } from "react";
import QuestionCard from "./QuestionCard";
import Timer from "./Timer";
import { QuestionType } from "../data/question";

interface QuizProps {
  questions: QuestionType[];
  score: number;
  setScore: (s: number) => void;
  onGameOver: () => void;
}

export default function Quiz({
  questions,
  score,
  setScore,
  onGameOver,
}: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAnswer = (answer: string) => {
    const current = questions[currentIndex];
    if (answer === current.answer) setScore(score + 50);

    if (currentIndex + 1 === questions.length) {
      onGameOver();
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="w-full max-w-xl space-y-4">
      <Timer seconds={60} onTimeOut={onGameOver} />
      <QuestionCard
        question={questions[currentIndex]}
        onAnswer={handleAnswer}
      />
      <div className="text-center">Score: {score}</div>
    </div>
  );
}
