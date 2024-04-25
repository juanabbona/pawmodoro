import { useSettings } from "context/SettingsContext/SettingsContext";
import theme from "./theme";

export const useTheme = () => {
  const settings = useSettings();

  return theme[settings.theme];
};
