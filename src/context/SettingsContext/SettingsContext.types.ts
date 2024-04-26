import { ReactNode } from "react";
import { ThemeName } from "theme/types";

export type SettingsProviderProps = {
  children: ReactNode;
};

export type SettingsContextState = {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  focusTime: number;
  setFocusTime: (
    focusTime: number | ((prevFocusTime: number) => number)
  ) => void;
  breakTime: number;
  setBreakTime: (
    breakTime: number | ((prevBreakTime: number) => number)
  ) => void;
};
