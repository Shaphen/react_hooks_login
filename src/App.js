import './App.css';
import LoginFormHook from "./components/session_hook/login";
import LoginFormClass from "./components/session_class/login";

function App() {
  return (
    <div className="App">
      {/* <LoginFormHook /> */}
      <LoginFormClass />
    </div>
  );
}

export default App;
