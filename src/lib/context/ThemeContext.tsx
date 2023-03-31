// Global
import { createContext, useContext } from 'react';

export const ALL_THEMES = ['Primary', 'Secondary'] as const;

type ThemeTuple = typeof ALL_THEMES;

//export type ThemeName = 'Base' | 'Dark';
export type ThemeName = ThemeTuple[number];

export type ThemeFile = {
  [key in ThemeName]: any;
};

export const ThemeContext = createContext<ThemeName>('Primary');

export const useTheme = (themeFile?: ThemeFile) => {
  const themeName = useContext(ThemeContext);
  const themeData = themeFile ? themeFile[themeName] : undefined;
  return { themeName, themeData };
};
