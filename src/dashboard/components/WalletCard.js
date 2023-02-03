import React from "react";
import walletIcon from "../../images/wallet-icon.png"

function WalletCard(props) {
    return (
        <div    className="wallet basis-1/2 flex flex-row p-2 bg-white rounded-md shadow-sm hover:shadow-md cursor-pointer"
                onClick={props.onClick}>                 
            <div className=" flex items-center justify-center w-8 m-3 ">
                <img className="w-6" src={walletIcon} alt="wallet-icon" />
            </div>
            <div>
                <p className=" text-lg font-semibold text-slate-900">{props.name[0].toUpperCase() + props.name.substring(1).toLowerCase()}</p>
                <p className=" text-md text-slate-600">Cash</p>
                <p  className={` text-2xl font-normal text-green-500 ${props.amount < 0 && `text-red-500`}`}>
                    {`${Number(props.amount).toFixed(2)} ${props.currency.toUpperCase()}`}
                </p>
            </div>
        </div>
  );
}

export default WalletCard;
