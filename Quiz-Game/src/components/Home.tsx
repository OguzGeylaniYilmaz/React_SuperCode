interface HomeProps {
  onStart: () => void;
}

export default function Home({ onStart }: HomeProps) {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-4xl font-bold">🎯 Who Wants To Be A Millionaire?</h1>
      <button
        className="bg-yellow-400 text-black px-6 py-2 rounded-2xl shadow-lg text-lg"
        onClick={onStart}
      >
        Start Game
      </button>
    </div>
  );
}
