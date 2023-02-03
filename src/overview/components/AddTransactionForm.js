import React from "react"
import { category, currency, styleClass } from "../../generalComponents/FormComponents"

export function AddTransactionForm({transaction, setTransaction, errorMsg}){
    function handleChange(event){
        const {name, value} = event.target
        setTransaction((prev) => ({...prev, [name]: value}))
    }

    return(
        <form className=" grid grid-flow-row grid-cols-1 gap-y-3">
            <div className=" col-span-1">
                <h4 className=" text-sm font-light text-gray-500">Category Type <span className=" font-bold text-black">&#42;</span></h4>
                <select className= {` form-select ${styleClass}`} name="type" value={transaction.type} onChange={handleChange} style={errorMsg.styleTextBox(transaction.type)}>
                    <option value="" className=" bg-gray-700 text-white font-bold">-- Select Category Type --</option>
                    <option value="expenses">Expenses</option>
                    <option value="income">Income</option>
                </select>
                <p style={errorMsg.styleText}>{!transaction.type && errorMsg.text}</p>
            </div>

            {    
                transaction.type &&        
                <div className=" col-span-1">
                    <h4 className=" text-sm font-light text-gray-500">Category <span className=" font-bold text-black">&#42;</span></h4>
                    <select className= {` form-select ${styleClass}`} name="category" value={transaction.category} onChange={handleChange} style={errorMsg.styleTextBox(transaction.category)}>  
                        {transaction.type === 'expenses' && <option value="" className=" bg-gray-700 text-white font-bold">-- Select Expenses --</option>}
                        {transaction.type === 'expenses' && category.map((item) => item.type === 'expenses' && <option key={item.title} value={item.title}>{item.title[0].toUpperCase() + item.title.substring(1).toLowerCase()}</option>)}
                        
                        {transaction.type === 'income' && <option value="" className=" bg-gray-700 text-white font-bold">-- Select Income --</option>}
                        {transaction.type === 'income' && category.map((item) => item.type === 'income' && <option key={item.title} value={item.title}>{item.title[0].toUpperCase() + item.title.substring(1).toLowerCase()}</option>)}
                    </select>
                    <p style={errorMsg.styleText}>{!transaction.category && errorMsg.text}</p>
                </div>
            }

            <div className=" col-span-1">
                <h4 className=" text-sm font-light text-gray-500">Date <span className=" font-bold text-black">&#42;</span></h4>
                <input className={` form-input ${styleClass}`} type="date" value={transaction.date} name="date" onChange={handleChange} style={errorMsg.styleTextBox(transaction.date)}/>
                <p style={errorMsg.styleText}>{!transaction.date && errorMsg.text}</p>
            </div>

            <div className=" col-span-1">
                <h4 className=" text-sm font-light text-gray-500">Amount <span className=" font-bold text-black">&#42;</span></h4>
                <input className={`form-input ${styleClass}`} type="number" name="amount" value={transaction.amount} placeholder="0.00" onChange={handleChange} style={errorMsg.styleTextBox(transaction.amount)}/>
                <p style={errorMsg.styleText}>{!transaction.amount && errorMsg.text}</p>
            </div>

            <div className=" col-span-1">
                <h4 className=" text-sm font-light text-gray-500">Currency <span className=" font-bold text-black">&#42;</span></h4>
                <select className= {` form-select ${styleClass}`} name="currency" value={transaction.currency} onChange={handleChange} style={errorMsg.styleTextBox(transaction.currency)}>
                    <option value="" className=" bg-gray-700 text-white font-bold">-- Choose Currency --</option>
                    {currency.map((item) => <option key={item.value} value={item.value}>{item.title}</option>)}
                </select>
                <p style={errorMsg.styleText}>{!transaction.currency && errorMsg.text}</p>
            </div>

            <div className=" col-span-1">
                <h4 className=" text-sm font-light text-gray-500">Note</h4>
                <input className={`form-input ${styleClass}`} type="text" name="note" value={transaction.note} placeholder="Write Note" onChange={handleChange} />
            </div>
        </form>
    )
}