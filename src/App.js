import './App.css';
import { Provider } from 'react-redux';
import LoginFormHook from "./components/session_hook/login";
// import LoginFormClass from "./components/session_class/login";

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <div className="App">
        <LoginFormHook />
        {/* <LoginFormClass /> */}
      </div>
    </Provider>
  );
}

export default App;
