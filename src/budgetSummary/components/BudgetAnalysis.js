import React from "react";
import { BudgetProgressBar } from "./BudgetProgressBar"; 
import StatsDetails from "../../generalComponents/StatsDetails";
import { BudgetComment } from "./BudgetComment";
import { differenceInDays, isWithinInterval } from "date-fns";

export function BudgetAnalysis({amount, currency, dateRange, moneyAnalysis, recurrence}){
    const isWithinBudgetRange = isWithinInterval(new Date(), {start: new Date(dateRange.startDate), end: new Date(dateRange.endDate)})
    const amountCanSpend =  isWithinBudgetRange ? moneyAnalysis.moneyLeft / (recurrence - differenceInDays(new Date(), dateRange.startDate)) : 0
    const summary = [
        {title: 'Originally Budgeted', amount: amount},
        {title: 'Spent so far', amount: -moneyAnalysis.expenses},
        {title: moneyAnalysis.moneyLeft < 0 ? 'Money overspent' : 'Money left', amount: moneyAnalysis.moneyLeft},
        {title: 'You can spend/Day', amount: (moneyAnalysis.moneyLeft < 0) ? 0 :amountCanSpend}
    ]

    return (
        <div>
            <div className=" flex flex-row my-2 space-x-4 overflow-x-auto">
                { summary.map((item) => {return (<StatsDetails key={item.title} currency={currency} {...item} />)}) }
            </div>
            <div className=" p-8 bg-white rounded-md">
                <h2 className=" text-lg font-semibold text-gray-800">Budget Progress</h2>
                <div className=" flex flex-col justify-center items-center py-6 space-y-8 text-xl font-normal text-gray-500">
                    <BudgetComment 
                        amountCanSpend = {amountCanSpend}
                        moneyLeft = {moneyAnalysis.moneyLeft}
                        currency = {currency}
                        isWithinBudgetRange = {isWithinBudgetRange}
                    />
                    <div className=" w-full lg:w-1/2">
                        <BudgetProgressBar 
                            amount = {amount} 
                            expenses = {moneyAnalysis.expenses}
                            recurrence = {recurrence}
                            dateRange = {dateRange}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}