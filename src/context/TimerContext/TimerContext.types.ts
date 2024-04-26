import { ReactNode } from "react";
import Timer from "tiny-timer";

export type TimerProviderProps = {
  children: ReactNode;
};

export type TimerContextState = {
  time: Timer["time"];
  phase: "focus" | "break";
  status: Timer["status"];
  start: () => void;
  stop: () => void;
  pause: Timer["pause"];
  subscribe: Timer["on"];
};
