import { Planet } from "react-kawaii";
import { useState } from "react";

type KawaiiMood =
  | "sad"
  | "happy"
  | "blissful"
  | "lovestruck"
  | "excited"
  | "ko";

const moods: KawaiiMood[] = [
  "sad",
  "happy",
  "blissful",
  "lovestruck",
  "excited",
  "ko",
];

function App() {
  const [mood, setMood] = useState<KawaiiMood>("ko");

  const handleClick = () => {
    const randomMood = moods[Math.floor(Math.random() * moods.length)];
    setMood(randomMood);
  };

  return (
    <div>
      <Planet size={300} mood={mood} color="#FDA7DC" />
      <button onClick={handleClick}>Random Mood</button>
    </div>
  );
}

export default App;
