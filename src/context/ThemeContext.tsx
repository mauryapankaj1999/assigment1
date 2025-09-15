import { createContext, useContext, useState,  } from "react";

type ThemeContextType = {
  bg: string;
  setBg: (color: string) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [bg, setBg] = useState("rgbaonecoloer");

  return (
    <ThemeContext.Provider value={{ bg, setBg }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
