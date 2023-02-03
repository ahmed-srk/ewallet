import React from "react"
import { currency, styleClass } from "../../generalComponents/FormComponents"

export function AddWalletForm({wallet, setWallet, errorMsg}){
    function handleChange(event){
        const {name, value} = event.target
        setWallet((prev) => ({...prev, [name]: value}))
    }

    return(
        <form className=" grid grid-flow-row grid-cols-2 gap-x-3">
            <div className=" col-span-2 mb-4">
                <h4 className=" text-sm font-light text-gray-500">Wallet Name <span className=" font-bold text-black">&#42;</span></h4>
                <input className={` form-input ${styleClass}`} type="text" name="name" value={wallet.name} placeholder="Enter your Wallet Name" onChange={handleChange} style={errorMsg.styleTextBox(wallet.name)} />
                <p style={errorMsg.styleText}>{!wallet.name && errorMsg.text}</p>
            </div>

            <div className=" col-span-2 mb-4">
                <h4 className=" text-sm font-light text-gray-500">Currency <span className=" font-bold text-black">&#42;</span></h4>
                <select className={` form-select ${styleClass}`} name="currency" value={wallet.currency} onChange={handleChange} style={errorMsg.styleTextBox(wallet.currency)}>
                    <option value="" className=" bg-gray-700 text-white font-bold">-- Choose Currency --</option>
                    {currency.map((item) => <option key={item.value} value={item.value}>{item.title}</option>)}
                </select>
                <p style={errorMsg.styleText}>{!wallet.currency && errorMsg.text}</p>
            </div>

            <div className=" col-span-2 mb-4">
                <h4 className=" text-sm font-light text-gray-500">Starting Balance</h4>
                <input className={` form-input ${styleClass}`} type="number" name="amount" value={wallet.amount} placeholder="0.00" onChange={handleChange} />
            </div>                         
        </form>
    )
}
