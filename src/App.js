import React from "react";
import Nav from "./components/Nav";
import Dashboard from "./Dashboard";
import Budgets from "./Budgets";
import Foot from "./components/Foot"
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="app min-h-screen bg-slate-100">
            <Nav />      
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='budgets' element={<Budgets />} />
            </Routes>
            <Foot />
        </div>        
    );
}

export default App;
