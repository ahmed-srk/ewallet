import React from "react"
import { addDays } from "date-fns"

function BudgetCard(props) {
    const formatDate = (date) => date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()

    return (
    <div className="budget-card basis-1/2 flex flex-col p-4 bg-white space-y-4
                    rounded-md shadow-sm hover:shadow-md cursor-pointer">                             
            <div className=" flex flex-col -space-y-1">
                <p className=" text-lg font-semibold text-slate-800">{props.name}</p>
                <p className=" text-md text-slate-400">All Wallets</p>
            </div>
            <div className=" flex flex-col -space-y-1 text-lg text-slate-400">
                <p>
                    <span className=" font-bold text-green-500">{`${Number(props.amount - 100)} USD`}</span> left
                </p>            
                <p>
                    From <span className=" font-semibold">{`${Number(props.amount)} USD`}</span>
                </p>
            </div>
            <div className=" flex flex-col text-md text-slate-400">
                <div className="w-full h-10 rounded bg-slate-200">
                    <div className={` flex items-center w-1/2 pl-2 h-10 rounded bg-green-500`}>
                        <span className=" text-lg font-bold text-white">
                            {`${50}`}%
                        </span>
                    </div>
                </div>
                <div className=" flex justify-between text-sm font-thin">
                    <span className=" ">{formatDate(new Date(props.startDate))}</span>
                    <span className=" ">{formatDate(addDays(new Date(props.startDate), props.recurrence))}</span>
                </div>
            </div>
    </div>
    );
}

export default BudgetCard;
