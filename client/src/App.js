import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import HomePage from "../components/HomePage";
import RegisterPage from "../components/RegisterPage";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";



const App = () => (
  <Router>
    <div>
      {/* <Nav /> */}
      <Route exact path="/" component={HomePage} />
      <Route exact path="/" component={RegisterPage} />
      </div>
  </Router>
);

export default App;
