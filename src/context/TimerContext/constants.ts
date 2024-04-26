import { TimerContextState } from "./TimerContext.types";

export const INITIAL_STATE: TimerContextState = {
  time: 0,
  phase: "focus",
  status: "stopped",
  start: () => {},
  stop: () => {},
  pause: () => {},
  subscribe: () => {},
};
