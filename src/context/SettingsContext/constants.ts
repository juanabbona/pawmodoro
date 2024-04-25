import { SettingsContextState } from "./SettingsContext.types";

export const INITIAL_STATE: SettingsContextState = {
  theme: "amber",
  setTheme: () => {},
  focusTime: 25 * 60,
  setFocusTime: () => {},
  breakTime: 5 * 60,
  setBreakTime: () => {},
};
