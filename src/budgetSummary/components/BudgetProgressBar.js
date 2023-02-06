import React from "react";
import { format } from "date-fns";

export function BudgetProgressBar({amount, dateRange, expenses, recurrence}){
    const percentUsed = (Number(expenses) / Number(amount)) * 100
    const style = { width: percentUsed > 100 ? `100%` : `${percentUsed}%` }

    return (
        <div className=" w-full flex flex-col text-md text-slate-400">
            <div className="w-full h-10 rounded bg-slate-200">
                <div style={style} className={` flex items-center h-10 rounded ${percentUsed > 100 ? `bg-red-500` : `bg-green-500`}`}>
                    <span className={` text-lg font-bold ${percentUsed > 100 ? `text-gray-200` : `text-gray-700`} ml-3`}>{`${percentUsed.toFixed(2)}`}%</span>    
                </div>
            </div>
            <div className=" flex justify-between text-sm font-normal">
                <span>{format(new Date(dateRange.startDate), 'dd/MM/yyyy')}</span>
                <span>{format(new Date(dateRange.endDate), 'dd/MM/yyyy')}</span>
            </div>
        </div>
    )
}