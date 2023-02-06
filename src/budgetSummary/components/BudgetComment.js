import React from "react";

export function BudgetComment({amountCanSpend, currency, isWithinBudgetRange, moneyLeft}){    
    return (
        <div className=" text-center">
            {
                isWithinBudgetRange ?
                <div>
                    {
                        moneyLeft < 0 ?
                        <p>
                            Budget has been exceeded by 
                            <span className=" font-bold text-gray-800"> {Math.abs(moneyLeft.toFixed(2))}{currency.toUpperCase()}</span>.
                        </p> :
                        <p>
                            Keep Spending. You can spend
                            <span className=" font-bold text-gray-800"> {(amountCanSpend).toFixed(2)}{currency.toUpperCase()} </span>
                            each day for the rest of the period.
                        </p>
                    }
  
                </div> :
                <div>
                    {
                        moneyLeft < 0 ?
                        <p>
                            Budget has been exceeded by 
                            <span className=" font-bold text-gray-800"> {Math.abs(moneyLeft.toFixed(2))}{currency.toUpperCase()}</span>,
                            but don't despair, it will get better next time.
                        </p> :
                        <p>
                            Well done! You managed to stay within budget and what's more, you saved up
                            <span className=" font-bold text-gray-800"> {(moneyLeft).toFixed(2)}{currency.toUpperCase()}</span>.
                            Keep it up!
                        </p>
                    }
                </div>

            }
        </div>
    )
}