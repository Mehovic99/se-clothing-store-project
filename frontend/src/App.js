import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./icons.js";
import HomePage from "./screens/HomePage";
import HomePageLogged from "./screens/HomePageLogged";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ResetPassword from "./screens/ResetPassword";
import UserProfile from "./screens/UserProfile";
import EditUserProfile from "./screens/EditUserProfile";
import Searching from "./screens/Searching";
import "./style.css";

function App() {
  return (
    <Router>
      <Route path="/" exact component={HomePage} />
      <Route path="/HomePage/" exact component={HomePage} />
      <Route path="/HomePageLogged/" exact component={HomePageLogged} />
      <Route path="/LoginScreen/" exact component={LoginScreen} />
      <Route path="/RegisterScreen/" exact component={RegisterScreen} />
      <Route path="/ResetPassword/" exact component={ResetPassword} />
      <Route path="/UserProfile/" exact component={UserProfile} />
      <Route path="/EditUserProfile/" exact component={EditUserProfile} />
      <Route path="/Searching/" exact component={Searching} />
    </Router>
  );
}

export default App;
