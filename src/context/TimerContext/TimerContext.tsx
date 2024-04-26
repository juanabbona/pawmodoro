import { createContext, useContext, useEffect, useRef, useState } from "react";
import { TimerContextState, TimerProviderProps } from "./TimerContext.types";
import { INITIAL_STATE } from "./constants";
import Timer from "tiny-timer";
import { useSettings } from "context/SettingsContext/SettingsContext";

const TimerContext = createContext<TimerContextState>(INITIAL_STATE);

const TimerProvider = ({ children }: TimerProviderProps) => {
  const timerRef = useRef<Timer>(new Timer());

  const [phase, setPhase] = useState<"focus" | "break">("focus");
  const [status, setStatus] = useState<Timer["status"]>("stopped");

  const { focusTime, breakTime } = useSettings();

  useEffect(() => {
    timerRef.current.on("done", () => {
      setPhase((prevPhase) => (prevPhase === "focus" ? "break" : "focus"));
    });
    timerRef.current.on("statusChanged", (newStatus) => {
      setStatus(newStatus);
    });
  }, []);

  const start = () => {
    if (status === "stopped")
      timerRef.current.start(phase === "focus" ? focusTime : breakTime);
    else timerRef.current.resume();
  };

  const pause = () => {
    timerRef.current.pause();
  };

  const stop = () => {
    timerRef.current.stop();

    // Reset the phase to focus
    setPhase("focus");
  };

  const subscribe = (event: string, callback: (time: number) => void) => {
    timerRef.current.on(event, callback);
  };

  return (
    <TimerContext.Provider
      value={{
        time: timerRef.current.time,
        phase,
        status,
        start,
        stop,
        pause,
        subscribe,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = () => {
  const context = useContext(TimerContext);

  if (!context) {
    throw new Error("useSettings must be used within a TimerProvider");
  }

  return context;
};

export default TimerProvider;
