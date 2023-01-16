import React from "react";
import walletIcon from "../images/wallet-icon.png"

function Wallet(props) {
  return (
    <div className="wallet cursor-pointer basis-1/2 flex flex-row rounded-md hover:shadow-md shadow-sm bg-white p-2">
        <div className="flex w-8 m-3 items-center justify-center">
            <img src={walletIcon} className=" w-6" alt="wallet-icon"/>
        </div>
        <div className=" ">
            <p className=" text-lg font-semibold">{props.name}</p>
            <p className=" text-md text-slate-600">Cash</p>
            <p className=" text-xl font-bold text-green-500">{isNaN(props.amount) ? `${props.amount}` : `${Number(props.amount)} USD`}</p>
        </div>
    </div>
  );
}

export default Wallet;
