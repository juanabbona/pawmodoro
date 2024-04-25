import "./App.css";
import SettingsProvider from "./context/SettingsContext/SettingsContext";
import Clock from "./panels/Clock/Clock";

function App() {
  return (
    <SettingsProvider>
      <Clock />
    </SettingsProvider>
  );
}

export default App;
