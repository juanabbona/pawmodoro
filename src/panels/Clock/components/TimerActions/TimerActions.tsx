import { useTimer } from "context/TimerContext/TimerContext";
import "./TimerActions.css";
import { PlayIcon, PauseIcon, StopIcon } from "icons";

const TimerActions = () => {
  const { start, stop, pause, status } = useTimer();

  return (
    <div className="flex gap-3">
      {(status === "paused" || status === "stopped") && (
        <button
          onClick={start}
          className="icon-button lg transparent p-3 pl-4 "
        >
          <PlayIcon className="w-4 h-4" />
        </button>
      )}
      {status === "running" && (
        <button onClick={pause} className="icon-button lg transparent p-3">
          <PauseIcon className="w-4 h-4" />
        </button>
      )}
      {(status === "running" || status === "paused") && (
        <button onClick={stop} className="icon-button lg transparent p-3">
          <StopIcon className="w-4 h-4" />
        </button>
      )}
      {/* <button className="icon-button lg transparent p-3 pl-4">
        <SkipIcon className="w-4 h-4" />
      </button> */}
    </div>
  );
};

export default TimerActions;
