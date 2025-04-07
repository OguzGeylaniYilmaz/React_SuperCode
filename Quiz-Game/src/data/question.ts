export interface QuestionType {
  question: string;
  options: string[];
  answer: string;
}

export const questions: QuestionType[] = [
  {
    question: "What is the capital city of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  {
    question: "How many continents are there on Earth?",
    options: ["5", "6", "7", "8"],
    answer: "7",
  },
  {
    question: "What gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Hydrogen", "Carbon Dioxide", "Nitrogen"],
    answer: "Carbon Dioxide",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Vincent van Gogh",
      "Michelangelo",
    ],
    answer: "Leonardo da Vinci",
  },
  {
    question: "Which ocean is the largest in the world?",
    options: ["Atlantic", "Indian", "Pacific", "Arctic"],
    answer: "Pacific",
  },
  {
    question: "Which language has the most native speakers?",
    options: ["English", "Hindi", "Mandarin", "Spanish"],
    answer: "Mandarin",
  },
  {
    question: "How many hours are there in two days?",
    options: ["24", "36", "48", "72"],
    answer: "48",
  },
  {
    question: "What is H2O commonly known as?",
    options: ["Oxygen", "Salt", "Water", "Hydrogen"],
    answer: "Water",
  },
  {
    question: "Which animal is known as the King of the Jungle?",
    options: ["Tiger", "Lion", "Elephant", "Giraffe"],
    answer: "Lion",
  },
];
