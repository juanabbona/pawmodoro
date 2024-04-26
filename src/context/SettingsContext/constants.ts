import { SettingsContextState } from "./SettingsContext.types";

export const INITIAL_STATE: SettingsContextState = {
  theme: "amber",
  setTheme: () => {},
  focusTime: 25 * 60 * 1000,
  setFocusTime: () => {},
  breakTime: 5 * 60 * 1000,
  setBreakTime: () => {},
};
