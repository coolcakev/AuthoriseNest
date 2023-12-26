import * as React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import {Route,  BrowserRouter as Router, Routes} from "react-router-dom";
import {ComponentType} from "react";
import Login from "./pages/login/login";
import Registration from "./pages/register/registration";
import Dashboard from "./pages/dashboard/dashboard";


function App() {
    return (
        <Router>
            <Navbar/>
            <div className={"container"}>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Registration/>}/>
                    <Route path="/" element={<Dashboard/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;