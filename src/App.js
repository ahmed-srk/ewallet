import React from "react";
import Nav from "./Nav";
import Dashboard from "./Dashboard";
import Foot from "./Foot";

function App() {
  const [selected, setSelected] = React.useState('dashboard')

  function handleClick(option){
      setSelected(option)
  }

  return (
    <div className={"app bg-slate-100 h-fit"}>
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
