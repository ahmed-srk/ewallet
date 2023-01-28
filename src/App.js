import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./generalComponents/navigation/Nav"
import Dashboard from "./dashboard/Dashboard";
import BudgetsPage from "./budgetPage/BudgetsPage";
import Foot from "./generalComponents/navigation/Foot";

function App() {
    return (
        <div className="app min-h-screen bg-slate-100">
            <Nav />      
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='budgets' element={<BudgetsPage />} />
            </Routes>
            <Foot />
        </div>        
    );
}

export default App;
