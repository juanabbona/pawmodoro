import "./Clock.css";
import { useTheme } from "theme/hooks";
import { useState } from "react";
import Timer from "components/Timer";
import CustomizationActions from "./components/CustomizationActions";
import TimerActions from "./components/TimerActions";
import Button from "components/Button";

const Clock = () => {
  const theme = useTheme();

  const [isCustomizing, setIsCustomizing] = useState(false);

  const handleCustomizeButtonClick = () => setIsCustomizing((prev) => !prev);

  return (
    <div className="clock-root" style={{ background: theme.background }}>
      <div className="clock-header">
        <Button
          className="clock-customize-button"
          onClick={handleCustomizeButtonClick}
        >
          {isCustomizing ? "Close" : "Customize"}
        </Button>
      </div>
      <div className="clock-time">
        <Timer editable={false} />
      </div>
      <div className="clock-footer">
        {isCustomizing ? <CustomizationActions /> : <TimerActions />}
      </div>
    </div>
  );
};

export default Clock;
