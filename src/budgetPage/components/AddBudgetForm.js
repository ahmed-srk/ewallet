import React from "react";
import { category, currency, styleClass } from "../../generalComponents/FormComponents";

export function AddBudgetForm({budget, setBudget, errorMsg}){
    function handleChange(event){
        const {name, value, type} = event.target
        setBudget((prev) => ({...prev, [name]: type === 'radio' ? Number(value) : value}))
    }

    const recur = [
        {title: 'daily', value: 1},
        {title: 'weekly', value: 7},
        {title: 'biweekly', value: 14},
        {title: 'monthly', value: 30},
        {title: 'yearly', value: 365},
    ]

    return(
        <form className=" grid grid-cols-2 gap-x-3 grid-flow-row">
            <h2 className=" mb-3 text-xl font-normal text-black" >General Info</h2>
            <div className=" col-start-1 mb-3">
                <h4 className=" text-sm font-light text-gray-500">Budget Name <span className=" font-bold text-black">&#42;</span></h4>
                <input className={` form-input ${styleClass}`} type="text" name="name" value={budget.name} onChange={handleChange} style={errorMsg.styleTextBox(budget.name)}/>
                <p style={errorMsg.styleText}>{!budget.name && errorMsg.text}</p>
            </div>

            <div className=" mb-3">
                <h4 className=" text-sm font-light text-gray-500">Wallet <span className=" font-bold text-black">&#42;</span></h4>
                <select disabled={true} className={` form-select ${styleClass} focus:border-gray-200 hover:border-gray-200`} name="wallet" value={budget.wallet} onChange={handleChange} style={errorMsg.styleTextBox(budget.name)}>
                    <option value="all">All Wallets</option>
                </select>
                <p style={errorMsg.styleText}>{!budget.name && errorMsg.text}</p>
            </div>

            <div className=" col-start-1">
                <h4 className=" text-sm font-light text-gray-500">Amount <span className=" font-bold text-black">&#42;</span></h4>
                <input className={` form-input ${styleClass}`} type="number" name="amount" value={budget.amount} onChange={handleChange} style={errorMsg.styleTextBox(budget.amount)}/>
                <p style={errorMsg.styleText}>{!budget.amount && errorMsg.text}</p>
            </div>
            
            <div>
                <h4 className=" text-sm font-light text-gray-500">Currency <span className=" font-bold text-black">&#42;</span></h4>
                <select className={` form-select ${styleClass}`} name="currency" value={budget.currency} onChange={handleChange} style={errorMsg.styleTextBox(budget.currency)}>
                    <option value="" className=" bg-gray-700 text-white font-bold">-- Choose Currency --</option>
                    {currency.map((item) => <option key={item.value} value={item.value}>{item.title}</option>)}
                </select>
                <p style={errorMsg.styleText}>{!budget.currency && errorMsg.text}</p>
            </div>

            <h2 className=" mt-6 mb-3 text-xl font-normal text-black" >Budget Filter</h2>
            <div className=" col-start-1 col-span-1">
                <h4 className=" text-sm font-light text-gray-500">Category <span className=" font-bold text-black">&#42;</span></h4>
                <select className={` form-select ${styleClass}`} name="category" value={budget.category} onChange={handleChange} style={errorMsg.styleTextBox(budget.category)}>
                    <option value="" className=" bg-gray-700 text-white font-bold">-- Select Category --</option>
                    {category.map((item) => item.type === 'expenses' && <option key={item.title} value={item.title}>{item.title[0].toUpperCase() + item.title.substring(1).toLowerCase()}</option>)}
                </select>
                <p style={errorMsg.styleText}>{!budget.category && errorMsg.text}</p>
            </div>

            <h2 className=" col-start-1 mt-6 mb-3 text-xl font-normal text-black" >Budget Period</h2>
            <div className=" col-start-1 col-span-2 mb-3">
                <h4 className=" text-sm font-light text-gray-500">Recurrence <span className=" font-bold text-black">&#42;</span></h4>
                <ul className="grid grid-flow-col gap-x-3 overflow-x-auto p-3">
                    {
                        recur.map((item) => {
                            return (
                                <li key={item.value} className="">
                                    <input className="sr-only peer" type="radio" value={item.value} name="recurrence" id={item.title} checked={budget.recurrence === item.value} onChange={handleChange} />
                                    <label  className=" flex justify-center items-center px-4 py-1 bg-gray-200 rounded-3xl text-gray-500 cursor-pointer
                                                        focus:outline-none peer-checked:bg-green-500 peer-checked:text-white" 
                                            htmlFor={item.title}>
                                        {item.title[0].toUpperCase() + item.title.substring(1)}
                                    </label>
                                </li>
                            )
                        })
                    }
                </ul>   
            </div>

            <div className=" col-start-1 col-span-1">
                <h4 className=" text-sm font-light text-gray-500">Start Date <span className=" font-bold text-black">&#42;</span></h4>
                <input className={` form-input ${styleClass}`} type="date" value={budget.startDate} name="startDate" onChange={handleChange} style={errorMsg.styleTextBox(budget.startDate)}/>
                <p style={errorMsg.styleText}>{!budget.startDate && errorMsg.text}</p>
            </div>                                
        </form>
    )
}