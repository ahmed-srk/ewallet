import React from "react";
import { NavLink } from "react-router-dom";
import { nanoid } from "nanoid";
import Logo from "../../images/logo.png"
import userIcon from "../../images/user-icon.png"

function TestNav() {
    const [menu, setMenu] = React.useState(false)
    const options = ['dashboard', 'budgets']
    const sidemenu = ['settings', 'support', 'log out']

    return (
        <nav className=" nav grid grid-cols-12 px-1 bg-white shadow-md sticky top-0">
            <div className=" col-span-2 flex justify-center items-center">
                <img className="md:w-5/6 cursor-pointer" src={Logo} alt="Logo" />
            </div>

            <div className=" col-span-8 invisible md:visible">
                <ul className=' flex justify-center items-center space-x-12'>
                    {
                        options.map((item) => {
                            return(
                                <NavLink    key = {nanoid()} to = {item === 'dashboard' ? `/` : `${item}`}
                                            className={(state) => state.isActive ? `border-b-4 text-green-500 border-green-500` : `text-slate-500`}>
                                    <li className={`py-4 text-lg hover:text-green-500 font-semibold cursor-pointer`}>
                                        {item[0].toUpperCase() + item.substring(1)}
                                    </li>
                                </NavLink>
                            )
                        })
                    }
                </ul>
            </div>

            <div    onMouseOver={() => setMenu(true)} onMouseLeave={() => setMenu(false)}
                    className=" col-span-2 relative flex justify-center items-center cursor-pointer">
                <div className={`   flex justify-center items-center w-11/12 h-full space-x-2 border-b-2 border-white cursor-pointer   
                                    ${menu && `border-slate-200 shadow-[0px_-1px_5px_0px_rgba(0,0,0,0.2)]`}`}>
                    <img className=" w-5/12 md:w-3/12 lg:w-2/12" src={userIcon} alt="profile-icon" />
                    <span className=" hidden text-sm lg:block lg:font-semibold xl:text-base text-slate-500" >
                        Ahmed Suwedi
                    </span>
                    <span className=" mb-2 text-lg font-bold lg:text-sm lg:font-semibold xl:text-base text-slate-500">
                        &#8964;
                    </span>
                </div>

                <div className={`absolute top-14 w-11/12 mt-2 bg-white shadow-lg rounded-[0px_0px_7px_7px] ${menu ? `block`: `hidden`}`}>
                    <ul className=" p-1 sm:p-3 font-semibold space-y-4">
                        {
                            sidemenu.map((item) => {
                                return(
                                    <li key={nanoid()} className="hover:text-green-500">
                                        {item[0].toUpperCase() + item.substring(1)}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default TestNav;
