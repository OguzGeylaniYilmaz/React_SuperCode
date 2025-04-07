import { useState } from "react";
import Quiz from "./components/Quiz";
import Home from "./components/Home";
import { questions } from "./data/question";
import GameOver from "./components/GameOver";
import HighScores from "./components/HighScores";

function App() {
  const [started, setStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScores, setHighScores] = useState<number[]>([]);

  const startGame = () => {
    setScore(0);
    setGameOver(false);
    setStarted(true);
  };

  const endGame = () => {
    setGameOver(true);
    setStarted(false);
    setHighScores((prev) => [...prev, score].sort((a, b) => b - a).slice(0, 5));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-500 to-purple-700 text-white flex flex-col items-center justify-center p-4">
      {!started && !gameOver && <Home onStart={startGame} />}
      {started && !gameOver && (
        <Quiz
          questions={questions}
          score={score}
          setScore={setScore}
          onGameOver={endGame}
        />
      )}
      {gameOver && <GameOver score={score} onRestart={startGame} />}
      <HighScores scores={highScores} />
    </div>
  );
}

export default App;
