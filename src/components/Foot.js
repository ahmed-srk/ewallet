import React from "react";
import dashboardIcon from "../images/dashboard-icon.png";
import budgetsIcon from "../images/budget-icon.png"

function Foot(props) {
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
                            <li onClick={() => props.handleClick(item.title)} 
                                className={`basis-1/2 flex flex-col justify-center items-center py-1
                                            text-lg font-semibold hover:text-green-500 border-b-4 cursor-pointer
                                            ${props.selected === item.title ? `text-green-500 border-green-500` : `text-slate-500 border-white`}`}>
                                <img 
                                    className=" w-1/12" 
                                    src={item.image} alt={`${item.title}-icon"`} 
                                />
                                <span className=" text-sm">
                                    {item.title[0].toUpperCase() + item.title.substring(1)}
                                </span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Foot;