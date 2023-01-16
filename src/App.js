import React from "react";
import Nav from "./components/Nav";
import Dashboard from "./Dashboard";
import Foot from "./components/Foot";

function App() {
    const [selected, setSelected] = React.useState('dashboard')

    function handleClick(option){
        setSelected(option)
    }

    return (
        <div className={"app h-fit bg-slate-100"}>
            <Nav 
                selected = {selected}
                handleClick = {(option) => handleClick(option)}
            />
            <Dashboard />
            <Foot 
                selected = {selected}
                handleClick = {(option) => handleClick(option)}            
            />
        </div>
    );
}

export default App;
