import { PlayIcon } from "icons";
import "./Timer.css";
import { TimerProps } from "./Timer.types";
import { useTimer } from "context/TimerContext/TimerContext";
import { useEffect, useState } from "react";
import { useSettings } from "context/SettingsContext/SettingsContext";
import classNames from "classnames";

const Timer = ({ editable }: TimerProps) => {
  const [time, setTime] = useState<number>(0);

  const { phase, status, subscribe } = useTimer();

  const { focusTime, setFocusTime } = useSettings();

  useEffect(() => {
    if (subscribe)
      subscribe("tick", (newTime) => {
        setTime(newTime);
      });
  }, []);

  const handleIncreaseButtonClick = () => {
    if (focusTime !== 60 * 60 * 1000) {
      setFocusTime((prevFocusTime) => prevFocusTime + 5 * 60 * 1000);
    }
  };

  const handleDecreaseButtonClick = () => {
    if (focusTime > 0) {
      setFocusTime((prevFocusTime) => prevFocusTime - 5 * 60 * 1000);
    }
  };

  const timerTime = status === "stopped" ? focusTime : time;

  const minutes = Math.floor(timerTime / 1000 / 60);
  const seconds = Math.floor((timerTime / 1000) % 60);

  const minuteFirstDigit = Math.floor(minutes / 10);
  const minuteSecondDigit = minutes % 10;

  const secondFirstDigit = Math.floor(seconds / 10);
  const secondSecondDigit = seconds % 10;

  return (
    <div className="timer-root">
      <div
        className={classNames(
          "flex flex-col gap-3 -ml-11 pr-4 opacity-0 transition-opacity",
          {
            "opacity-100": editable,
          }
        )}
      >
        <button
          onClick={handleIncreaseButtonClick}
          className="icon-button md transparent timer-increase-button"
        >
          <PlayIcon className="w-3 h-3 -rotate-90" />
        </button>
        <button
          onClick={handleDecreaseButtonClick}
          className="icon-button md transparent timer-increase-button"
        >
          <PlayIcon className="w-3 h-3 rotate-90" />
        </button>
      </div>
      <div>
        <div
          className={classNames("timer-phase", {
            "opacity-0": status === "stopped",
          })}
        >
          {phase} time
        </div>
        <div className="timer-digits">
          <div className="flex flex-1 justify-end">
            {minuteFirstDigit}
            {minuteSecondDigit}
          </div>
          <div className="text-9xl mx-6">:</div>
          <div className="flex-1">
            {secondFirstDigit}
            {secondSecondDigit}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
