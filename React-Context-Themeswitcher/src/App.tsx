import { ThemeProvider } from "./context/ThemeContext";
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
