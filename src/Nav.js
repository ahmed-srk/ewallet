import React from "react";
import Logo from "./images/logo.png"
import userIcon from "./images/user-icon.png"

function Nav(props) {
    const [menu, setMenu] = React.useState(false)   

  return (
    <div className="nav bg-white grid grid-cols-12 px-1 shadow-md sticky top-0">
        <div className=" col-span-2 flex justify-center items-center">
            <img className="md:w-5/6 cursor-pointer" src={Logo} alt="Logo" />
        </div>
        <div className=" invisible md:visible col-span-8">
            <ul className=' flex justify-center items-center space-x-12'>
                <li onClick={() => props.handleClick('dashboard')}
                    className={`cursor-pointer py-4 font-semibold text-lg border-b-4 ${props.selected === 'dashboard' ? `text-green-500 border-green-500` : `text-slate-500 border-white`} hover:text-green-500 `}>
                    Dashboard
                </li>
                <li onClick={() => props.handleClick('budgets')}
                    className={`cursor-pointer py-4 font-semibold text-lg border-b-4 ${props.selected === 'budgets' ? `text-green-500 border-green-500` : `text-slate-500 border-white`} hover:text-green-500 `}>
                    Budgets
                </li>
            </ul>
        </div>
        <div onMouseOver={() => setMenu(true)} onMouseLeave={() => setMenu(false)}  className="col-span-2 flex justify-center items-center relative cursor-pointer">
            <div className={`sidemenu flex justify-center items-center space-x-2 cursor-pointer border-b-2 border-white w-11/12 h-full ${menu && `shadow-[0px_-1px_5px_0px_rgba(0,0,0,0.2)] border-slate-200`}`}>
                <img className="w-5/12 md:w-3/12 lg:w-2/12" src={userIcon} alt="profile-icon" />
                <span className=" hidden lg:block lg:font-semibold text-sm xl:text-base text-slate-500" >Ahmed Suwedi</span>
                <span className=" font-bold text-lg text- lg:font-semibold lg:text-sm xl:text-base text-slate-500 mb-2">&#8964;</span>
            </div>

            <div className={`sidemenu-options absolute w-11/12 top-14 mt-2 bg-white rounded-[0px_0px_7px_7px] shadow-lg ${menu ? `block`: `hidden`}`}>
                <ul className=" space-y-4 p-1 sm:p-3 font-semibold ">
                    <li className="hover:text-green-500">Settings</li>
                    <li className="hover:text-green-500">Support</li>
                    <li className="hover:text-green-500">Log Out</li>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Nav;
