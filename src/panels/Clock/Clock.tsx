import "./Clock.css";
import { useState } from "react";
import Timer from "components/Timer";
import CustomizationActions from "./components/CustomizationActions";
import TimerActions from "./components/TimerActions";
import Button from "components/Button";
import { useSettings } from "context/SettingsContext/SettingsContext";
import classNames from "classnames";
import { useTimer } from "context/TimerContext/TimerContext";

const Clock = () => {
  const { theme } = useSettings();

  const { status } = useTimer();

  const [isCustomizing, setIsCustomizing] = useState(false);

  const handleCustomizeButtonClick = () => setIsCustomizing((prev) => !prev);

  return (
    <div className={classNames("clock-root", `bg-${theme}-gradient`)}>
      <div className="clock-header">
        <Button
          className={classNames("clock-customize-button", {
            "opacity-0": status !== "stopped",
          })}
          onClick={handleCustomizeButtonClick}
        >
          {isCustomizing ? "Close" : "Customize"}
        </Button>
      </div>
      <div className="clock-time">
        <Timer editable={isCustomizing} />
      </div>
      <div className="clock-footer">
        {isCustomizing ? <CustomizationActions /> : <TimerActions />}
      </div>
    </div>
  );
};

export default Clock;
