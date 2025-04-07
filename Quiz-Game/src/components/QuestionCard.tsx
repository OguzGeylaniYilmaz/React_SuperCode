import { QuestionType } from "../data/question";

interface QuestionCardProps {
  question: QuestionType;
  onAnswer: (a: string) => void;
}

export default function QuestionCard({
  question,
  onAnswer,
}: QuestionCardProps) {
  return (
    <div className="bg-white text-black p-6 rounded-2xl shadow-xl space-y-4">
      <h2 className="text-xl font-semibold">{question.question}</h2>
      <div className="grid grid-cols-2 gap-4">
        {question.options.map((opt) => (
          <button
            key={opt}
            onClick={() => onAnswer(opt)}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-xl"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
