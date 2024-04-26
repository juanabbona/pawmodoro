import { useSettings } from "context/SettingsContext/SettingsContext";
import { ThemeName } from "theme/types";
import "./CustomizationActions.css";
import { theme } from "theme";
import classNames from "classnames";

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
        <div className="customization-break-time">
          {Object.keys(theme).map((name) => (
            <button
              onClick={handleThemeButtonClick(name as ThemeName)}
              className={classNames(
                "icon-button",
                "transition-all",
                "duration-30",
                "ease-in-out",
                "p-1",
                {
                  md: settings.theme !== name,
                  lg: settings.theme === name,
                  transparent: settings.theme !== name,
                }
              )}
            >
              <div
                className={classNames(
                  "w-full",
                  "h-full",
                  "rounded-full",
                  `bg-${name}-gradient`
                )}
              />
            </button>
          ))}
        </div>
      </div>
      <div className="w-0.5 h-7 bg-white mt-6 bg-opacity-20 rounded-md"></div>
      <div className="customization-section">
        <span className="customization-section-title">Break duration</span>
        <div className="customization-break-time">
          {BREAK_TIME_OPTIONS.map(({ label, value }) => (
            <button
              onClick={handleBreakTimeButtonClick(value)}
              className={classNames(
                "icon-button",
                "transition-all",
                "duration-30",
                "ease-in-out",
                "p-1",
                {
                  md: value !== settings.breakTime,
                  lg: value === settings.breakTime,
                  transparent: value !== settings.breakTime,
                }
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomizationActions;
