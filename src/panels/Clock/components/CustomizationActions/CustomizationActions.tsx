import IconButton from "components/IconButton";
import { useSettings } from "context/SettingsContext/SettingsContext";
import { ThemeName } from "theme/types";
import "./CustomizationActions.css";
import { CustomizationActionsProps } from "./CustomizationActions.types";
import { theme } from "theme";

const BREAK_TIME_OPTIONS = [
  { label: "5'", value: 5 * 60 },
  { label: "10'", value: 10 * 60 },
  { label: "15'", value: 15 * 60 },
];

const CustomizationActions = () => {
  const { setTheme, setBreakTime, ...settings } = useSettings();

  const handleThemeButtonClick = (theme: ThemeName) => () => setTheme(theme);

  const handleBreakTimeButtonClick = (breakTime: number) => () =>
    setBreakTime(breakTime);

  return (
    <div className="customization-actions">
      <div className="customization-section">
        <span className="customization-section-title">Color scheme</span>
        <div className="">
          {Object.keys(theme)
            .map((name) => ({
              name,
              value: theme[name as ThemeName],
            }))
            .map(({ name, value }) => (
              <IconButton
                size={settings.theme === name ? "medium" : "small"}
                color={settings.theme === name ? "light" : "transparent"}
                onClick={handleThemeButtonClick(name as ThemeName)}
                className="p-1"
              >
                <div
                  className="w-full h-full rounded-full"
                  style={{ background: value.background }}
                />
              </IconButton>
            ))}
        </div>
      </div>
      <div className="w-0.5 h-7 bg-white mt-6 bg-opacity-20 rounded-md"></div>
      <div className="customization-section">
        <span className="customization-section-title">Break duration</span>
        <div className="customization-break-time">
          {BREAK_TIME_OPTIONS.map(({ label, value }) => (
            <IconButton
              size={settings.breakTime === value ? "medium" : "small"}
              color={settings.breakTime === value ? "light" : "transparent"}
              onClick={handleBreakTimeButtonClick(value)}
            >
              {label}
            </IconButton>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomizationActions;
