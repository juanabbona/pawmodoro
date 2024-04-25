import { createContext, useContext } from "react";
import {
  SettingsContextState,
  SettingsProviderProps,
} from "./SettingsContext.types";
import { INITIAL_STATE } from "./constants";
import { useLocalStorageValue } from "@react-hookz/web";

const SettingsContext = createContext<SettingsContextState>(INITIAL_STATE);

const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const { value: theme, set: setTheme } = useLocalStorageValue(
    "settings_theme",
    {
      initializeWithValue: true,
      defaultValue: INITIAL_STATE.theme,
    }
  );
  const { value: focusTime, set: setFocusTime } = useLocalStorageValue(
    "settings_focus_time",
    {
      initializeWithValue: true,
      defaultValue: INITIAL_STATE.focusTime,
    }
  );
  const { value: breakTime, set: setBreakTime } = useLocalStorageValue(
    "settings_break_time",
    {
      initializeWithValue: true,
      defaultValue: INITIAL_STATE.breakTime,
    }
  );

  return (
    <SettingsContext.Provider
      value={{
        theme,
        setTheme,
        focusTime,
        setFocusTime,
        breakTime,
        setBreakTime,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }

  return context;
};

export default SettingsProvider;
