import React from "react";
import walletIcon from "../images/wallet-icon.png"

function Wallet(props) {
  return (
    <div className="wallet basis-1/2 flex flex-row p-2 bg-white
                    rounded-md shadow-sm hover:shadow-md cursor-pointer">                 
        <div className=" flex items-center justify-center w-8 m-3 ">
            <img 
                className="w-6" 
                src={walletIcon}alt="wallet-icon"
            />
        </div>

        <div>
            <p className=" text-lg font-semibold text-slate-900">{props.name}</p>
            <p className=" text-md text-slate-600">Cash</p>
            <p className=" text-xl font-bold text-green-500">
                {isNaN(props.amount) ? `${props.amount}` : `${Number(props.amount)} USD`}
            </p>
        </div>
    </div>
  );
}

export default Wallet;
