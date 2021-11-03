import "./App.css";
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import SignIn from "./Screens/SignIn/SignIn";
import SignUp from "./Screens/SignUp/SignUp";
import MainContainer from "./containers/MainContainer";
import Nav from "./components/Nav/Nav.jsx"
import {
  loginUser,
  registerUser,
  removeToken,
  verifyUser,
} from './Services/auth';


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  };

  return (
    <div className="App">
      <Nav currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
          <Route path='/signin'>
            <SignIn handleLogin={handleLogin} />
          </Route>
          <Route path='/signup'>
            <SignUp handleRegister={handleRegister} />
          </Route>
          <Route path='/'>
            <MainContainer/>
          </Route>
        </Switch>
      </Nav>
    </div>
  );
}

export default App;
