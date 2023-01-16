import React from "react";
import dashboardIcon from "./images/dashboard-icon.png";
import budgetsIcon from "./images/budget-icon.png"

function Foot(props) {
  return (
    <div className="foot md:hidden bg-white w-full shadow-[0px_-1px_5px_0px_rgba(0,0,0,0.2)] sticky bottom-0">
        <ul className='flex'>
            <li onClick={() => props.handleClick('dashboard')}
                className={`basis-1/2 flex justify-center items-center flex-col cursor-pointer py-1 font-semibold text-lg border-b-4 hover:text-green-500 ${props.selected === 'dashboard' ? `text-green-500 border-green-500` : `text-slate-500 border-white`}`}>
                <img className=" w-1/12" src={dashboardIcon} alt="dashboard-icon" />
                <span className=" text-sm">Dashboard</span>
            </li>
            <li onClick={() => props.handleClick('budgets')}
                className={`basis-1/2 flex justify-center items-center flex-col cursor-pointer py-1 font-semibold text-lg border-b-4 hover:text-green-500 ${props.selected === 'budgets' ? `text-green-500 border-green-500` : `text-slate-500 border-white`}`}>
                <img className=" w-1/12" src={budgetsIcon} alt="budget-icon" />
                <span className=" text-sm">Budgets</span>
            </li>
        </ul>
    </div>
  );
}

export default Foot;
