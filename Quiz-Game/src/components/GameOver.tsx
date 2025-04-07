interface GameOverProps {
  score: number;
  onRestart: () => void;
}

export default function GameOver({ score, onRestart }: GameOverProps) {
  return (
    <div className="text-center space-y-4">
      <h2 className="text-2xl font-bold">🏁 Game is over!</h2>
      <p className="text-lg">Total Score: {score}</p>
      <button
        className="bg-green-400 px-4 py-2 rounded-xl text-black"
        onClick={onRestart}
      >
        Play Again
      </button>
    </div>
  );
}
