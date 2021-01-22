import './App.css';
import LoginFormHook from "./components/session_hook/login";
import LoginFormClass from "./components/session_class/login";
import { Provider } from 'react-redux';

const App = ({ store }) => {
  return (
    // <Provider store={store}>
      <div className="App">
        {/* <LoginFormHook /> */}
        <LoginFormClass />
      </div>
    // </Provider>
  );
}

export default App;
