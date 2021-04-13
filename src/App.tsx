import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Appointment from "./components/Appointment/Appointment";
import Home from "./components/Home/Home";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/appointment">
                    <Appointment />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
