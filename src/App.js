import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Appointment from "./components/Appointment/Appointment";
import AllPatients from "./components/Dashboard/AllPatients";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

export const UserContext = createContext("");

function App() {
    const [loggedInUser, setLoggedInUser] = useState({});
    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <Router>
                <Switch>
                    <Route path="/appointment">
                        <Appointment></Appointment>
                    </Route>
                    <Route path="/dashboard/appointment">
                        <Dashboard></Dashboard>
                    </Route>
                    <Route path="/dashboard/allPatients">
                        <AllPatients></AllPatients>
                    </Route>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
