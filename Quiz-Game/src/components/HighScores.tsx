interface HighScoresProps {
  scores: number[];
}

export default function HighScores({ scores }: HighScoresProps) {
  return (
    <div className="mt-8 bg-white text-black rounded-xl p-4 w-full max-w-md">
      <h3 className="text-xl font-bold text-center mb-2">🏆 Highest Scores</h3>
      <ul className="space-y-1">
        {scores.map((score, index) => (
          <li key={index}>
            #{index + 1}: {score} Score
          </li>
        ))}
      </ul>
    </div>
  );
}
