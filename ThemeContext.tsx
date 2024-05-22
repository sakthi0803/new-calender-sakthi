import React, { createContext, useContext, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider: React.FC = ({ children }: any) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const themeVariables = {
    light: {
      backgroundColor: "#ffffff",
      textColor: "#333333",
    },
    dark: {
      backgroundColor: "#333333",
      textColor: "#ffffff",
    },
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        style={{
          backgroundColor: themeVariables[theme].backgroundColor,
          color: themeVariables[theme].textColor,
          height: "100%",
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
