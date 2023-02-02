import React from "react"
import { category, currency } from "../../generalComponents/FormComponents"

export function AddTransactionForm({transaction, setTransaction, errorMsg}){
    function handleChange(event){
        const {name, value} = event.target
        setTransaction((prev) => ({...prev, [name]: value}))
    }

    return(
        <form className=" grid grid-flow-row grid-cols-1 gap-y-3">
            <div className=" col-span-1">
                <h4 className=" text-sm font-light text-gray-500">Category <span className=" font-bold text-black">&#42;</span></h4>
                <select className=" form-select w-full p-1 text-gray-800 focus:ring-0 rounded-md border-gray-200 focus:border-gray-400 hover:border-gray-300"
                        name="category" value={transaction.category} onChange={handleChange} style={errorMsg.styleTextBox(transaction.category)}>
                    <option value="">-- Select Category --</option>
                    {category.map((item) => <option key={item} value={item}>{item[0].toUpperCase() + item.substring(1).toLowerCase()}</option>)}
                </select>
                <p style={errorMsg.styleText}>{!transaction.category && errorMsg.text}</p>
            </div>

            <div className=" col-span-1">
                <h4 className=" text-sm font-light text-gray-500">Date <span className=" font-bold text-black">&#42;</span></h4>
                <input  className=" form-input w-full p-1 focus:ring-0 text-gray-800 rounded-md border-gray-200 focus:border-gray-400 hover:border-gray-300"
                        type="date" value={transaction.date} name="date" onChange={handleChange} style={errorMsg.styleTextBox(transaction.date)}/>
                <p style={errorMsg.styleText}>{!transaction.date && errorMsg.text}</p>
            </div>

            <div className=" col-span-1">
                <h4 className=" text-sm font-light text-gray-500">Amount <span className=" font-bold text-black">&#42;</span></h4>
                <input  className={`form-input w-full p-1 text-gray-800 focus:ring-0 rounded-md border-gray-200 focus:border-gray-400 hover:border-gray-300`}
                        type="number" name="amount" value={transaction.amount} placeholder="0.00" 
                        onChange={handleChange} style={errorMsg.styleTextBox(transaction.amount)}/>
                <p style={errorMsg.styleText}>{!transaction.amount && errorMsg.text}</p>
            </div>

            <div className=" col-span-1">
                <h4 className=" text-sm font-light text-gray-500">Currency <span className=" font-bold text-black">&#42;</span></h4>
                <select className=" form-select w-full p-1 text-gray-800 focus:ring-0 rounded-md border-gray-200 focus:border-gray-400 hover:border-gray-300"
                        placeholder="Type Bottom Text" name="currency" value={transaction.currency} onChange={handleChange} style={errorMsg.styleTextBox(transaction.currency)}>
                    <option value="">-- Choose Currency --</option>
                    {currency.map((item) => <option key={item.value} value={item.value}>{item.title}</option>)}
                </select>
                <p style={errorMsg.styleText}>{!transaction.currency && errorMsg.text}</p>
            </div>

            <div className=" col-span-1">
                <h4 className=" text-sm font-light text-gray-500">Note</h4>
                <input  className={`form-input w-full p-1 text-gray-800 focus:ring-0 rounded-md border-gray-200 focus:border-gray-400 hover:border-gray-300`}  
                        type="text" name="note" value={transaction.note} placeholder="Write Note" onChange={handleChange} />
            </div>
        </form>
    )
}