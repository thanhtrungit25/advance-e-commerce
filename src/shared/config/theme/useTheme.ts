import { useContext } from "react";

import {
  ThemeContext,
  type ThemeType,
  Theme,
  LOCAL_STORAGE_THEME_KEY,
} from "./ThemeConfig";

interface useThemeReturn {
  theme?: ThemeType;
  toggleTheme: () => void;
}

export const useTheme = (): useThemeReturn => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.PINK ? Theme.BLUE : Theme.PINK;
    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme, toggleTheme };
};
