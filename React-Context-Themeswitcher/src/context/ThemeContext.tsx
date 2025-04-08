import { createContext, useContext, useState, ReactNode } from "react";

type Theme = "light" | "dark" | "lightblue";

const themes = {
  light: { background: "white", color: "black" },
  dark: { background: "black", color: "white" },
  lightblue: { background: "#add8e6", color: "black" },
};

interface ThemeContextProps {
  theme: Theme;
  styles: { background: string; color: string };
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "light" ? "dark" : prev === "dark" ? "lightblue" : "light"
    );
  };

  const styles = themes[theme];

  return (
    <ThemeContext.Provider value={{ theme, styles, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme, must be used within ThemeProvider");
  return context;
};
