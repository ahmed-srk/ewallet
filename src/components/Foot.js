import React from "react";
import { NavLink } from "react-router-dom";
import { nanoid } from "nanoid";
import dashboardIcon from "../images/dashboard-icon.png";
import budgetsIcon from "../images/budget-icon.png"

function Foot() {
    const options = [
        {title: 'dashboard', image: dashboardIcon},
        {title: 'budgets', image: budgetsIcon}
    ]

    return (
        <div className="foot md:hidden w-full bg-white sticky bottom-0 
                        shadow-[0px_-1px_5px_0px_rgba(0,0,0,0.2)]">

            <ul className='flex'>
                {
                    options.map((item) => {
                        return (
                            <NavLink    key = {nanoid()} to = {item.title === 'dashboard' ? `/` : `${item.title}`}
                                        className={(state) => state.isActive ? `border-b-4 text-green-500 border-green-500` : `text-slate-500`}>
                                <li className={`basis-1/2 flex flex-col justify-center items-center py-1
                                                text-lg font-semibold hover:text-green-500 cursor-pointer`}>
                                    <img 
                                        className=" w-1/12" 
                                        src={item.image} alt={`${item.title}-icon"`} 
                                    />
                                    <span className=" text-sm">
                                        {item.title[0].toUpperCase() + item.title.substring(1)}
                                    </span>
                                </li>
                            </NavLink>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Foot;