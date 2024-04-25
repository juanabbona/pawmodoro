import "./Timer.css";
import { TimerProps } from "./Timer.types";

const Timer = (props: TimerProps) => {
  return (
    <div className="timer-root">
      <span className="timer-digit">2</span>
      <span className="timer-digit">5</span>
      <span className="timer-digit">:</span>
      <span className="timer-digit">0</span>
      <span className="timer-digit">0</span>
    </div>
  );
};

export default Timer;
