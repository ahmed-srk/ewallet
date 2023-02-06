import React from "react"
import { BudgetProgressBar } from "../../budgetSummary/components/BudgetProgressBar"

function BudgetCard(props) {  
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
                <p>
                    <span className={` font-bold text-xl ${props.moneyAnalysis.moneyLeft < 0 ? `text-red-500` : `text-green-500`}`}>{`${Math.abs(props.moneyAnalysis.moneyLeft.toFixed(2))} ${props.currency.toUpperCase()}`}</span>
                    <span> {props.moneyAnalysis.moneyLeft < 0 ? `overspent` : `left`}</span>
                </p>            
                <p>From <span className=" font-semibold">{`${Number(props.amount).toFixed(2)} ${props.currency.toUpperCase()}`}</span></p> 
            </div>
            <BudgetProgressBar
                amount = {props.amount} 
                expenses = {props.moneyAnalysis.expenses}
                recurrence = {props.recurrence}
                dateRange = {props.dateRange[0]}
            />
        </div>
    );
}

export default BudgetCard;
