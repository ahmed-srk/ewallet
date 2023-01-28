import React from "react"

export function AddWalletForm({wallet, setWallet, errorMsg}){
    function handleChange(event){
        const {name, value, type} = event.target
        setWallet((prev) => ({...prev, [name]: type === 'radio' ? Number(value) : value}))
    }

    return(
        <form className=" grid grid-flow-row grid-cols-2 gap-x-3">
            <div className=" col-span-2 mb-4">
                <h4 className=" text-sm font-light text-gray-500">Wallet Name <span className=" font-bold text-black">&#42;</span></h4>
                <input  className={`form-input w-full p-1 text-gray-800 focus:ring-0 rounded-md border-gray-200 focus:border-gray-400 hover:border-gray-300`}  
                        type="text" name="name" value={wallet.name} placeholder="Enter your Wallet Name"
                        onChange={handleChange} style={errorMsg.styleTextBox(wallet.name)} />
                <p style={errorMsg.styleText}>{!wallet.name && errorMsg.text}</p>
            </div>

            <div className=" col-span-2 mb-4">
                <h4 className=" text-sm font-light text-gray-500">Currency <span className=" font-bold text-black">&#42;</span></h4>
                <select className=" form-select w-full px-2 py-1 text-gray-800 focus:ring-0 rounded-md border-gray-200 focus:border-gray-400 hover:border-gray-300"
                        placeholder="Type Bottom Text" name="currency" value={wallet.currency} onChange={handleChange} style={errorMsg.styleTextBox(wallet.currency)}>
                    <option value="">-- Choose Currency --</option>
                    <option value="cny">CN Yuan</option>
                    <option value="eur">Euro</option>
                    <option value="tzs">TZ Shillings</option>
                    <option value="usd">US Dollars</option>
                    <option value="aed">UAE Dirham</option>
                </select>
                <p style={errorMsg.styleText}>{!wallet.currency && errorMsg.text}</p>
            </div>

            <div className=" col-span-2 mb-4">
                <h4 className=" text-sm font-light text-gray-500">Starting Balance</h4>
                <input  className={`form-input w-full p-1 text-gray-800 focus:ring-0 rounded-md border-gray-200 focus:border-gray-400 hover:border-gray-300`}
                        type="number" name="amount" value={wallet.amount} placeholder="0.00" onChange={handleChange} />
            </div>                         
        </form>
    )

}
