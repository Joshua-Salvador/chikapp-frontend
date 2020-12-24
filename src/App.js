import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserProvider } from "./components/UserContext";

import "./App.scss";
import Home from "./Home";
import RegisterLogin from "./components/RegisterLogin";
import Login from "./components/Login";
import Welcome from "./components/Welcome";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <RegisterLogin />
          </Route>
          <Route path="/:account" exact>
            <UserProvider>
              <Home />
            </UserProvider>
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
