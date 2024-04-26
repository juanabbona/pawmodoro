import "./App.css";

import { TimerProvider } from "context/TimerContext";
import { SettingsProvider } from "./context/SettingsContext";

import Clock from "./panels/Clock/Clock";

function App() {
  return (
    <SettingsProvider>
      <TimerProvider>
        <Clock />
      </TimerProvider>
    </SettingsProvider>
  );
}

export default App;
