import React from "react"
import { addDays, format } from "date-fns"

function BudgetCard(props) {
    const amountRemaining = Number(props.amount) - Number(props.expenses)
    const percentUsed = (Number(props.expenses) / Number(props.amount)) * 100
    const style = { width: `${percentUsed}%` }

    return (
        <div onClick={props.onClick} className="budget-card basis-1/2 flex flex-col p-4 bg-white space-y-3 rounded-md shadow-sm hover:shadow-md cursor-pointer">                             
            <div className=" flex flex-col -space-y-1">
                <p className=" text-xl font-semibold text-slate-800">{props.name[0].toUpperCase() + props.name.substring(1).toLowerCase()}</p>
                <p className=" text-base text-slate-400">
                    {props.wallet === 'all' ? `${props.wallet[0].toUpperCase() + props.wallet.substring(1)} Wallets` : `${props.wallet[0].toUpperCase() + props.wallet.substring(1)}`}
                </p>
                <p className=" text-base text-green-500 font-semibold">{props.category[0].toUpperCase() + props.category.substring(1)}</p>
            </div>
            <div className=" flex flex-col -space-y-1 text-slate-400">
                <p><span className=" font-bold text-xl text-green-500">{`${amountRemaining.toFixed(2)} ${props.currency.toUpperCase()}`}</span> left</p>            
                <p>From <span className=" font-semibold">{`${Number(props.amount).toFixed(2)} ${props.currency.toUpperCase()}`}</span></p>
            </div>
            <div className=" flex flex-col text-md text-slate-400">
                <div className="w-full h-10 rounded bg-slate-200">
                    <div style={style} className={` flex items-center h-10 rounded bg-green-500`}>
                        <span className={` text-lg font-bold text-gray-800 ml-3`}>{`${percentUsed.toFixed(2)}`}%</span>    
                    </div>
                </div>
                <div className=" flex justify-between text-sm font-normal">
                    <span className=" ">{format(new Date(props.startDate), 'dd/MM/yyyy')}</span>
                    <span className=" ">{format(addDays(new Date(props.startDate), props.recurrence - 1), 'dd/MM/yyyy')}</span>
                </div>
            </div>
        </div>
    );
}

export default BudgetCard;
