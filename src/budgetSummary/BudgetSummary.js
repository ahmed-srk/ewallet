import React from "react";
import { differenceInDays } from "date-fns";
import CustomDateRange from "../generalComponents/CustomDateRange"; 
import { BudgetAnalysis } from "./components/BudgetAnalysis";
import { NoBudget } from "./components/NoBudget";

function BudgetSummary(props){
    const [dateRange, setDateRange] = React.useState(
        [{ key: 'selection', startDate: new Date(props.budgetDateRange[0].startDate), endDate: new Date(props.budgetDateRange[0].endDate) }]
    )

    const showAnalysis = differenceInDays(new Date(dateRange[0].startDate), new Date(props.startDate)) >= 0 && differenceInDays(new Date(props.budgetDateRange[0].endDate), new Date(dateRange[0].endDate)) >= 0

    function changeDateRange(range){
        setDateRange([{ key:'selection', startDate: range[0].startDate, endDate: range[0].endDate }])
    }

    React.useEffect(() => {
        props.moneyAnalysis(dateRange)
        // eslint-disable-next-line
    }, [dateRange])

    return (
        <div>
            <h2 className=" py-4 text-2xl font-bold text-slate-700">
                {props.name[0].toUpperCase() + props.name.substring(1).toLowerCase()} <span className=" font-light">Summary</span>
            </h2>
            <div className=" grid grid-cols-4 gap-3 py-1">
                <div className=" col-span-4 md:col-start-3 md:col-span-2"><CustomDateRange dateRange={dateRange} changeDateRange={(range) => changeDateRange(range)} /></div>  
            </div>
            <div>
            {   
                showAnalysis ?
                <BudgetAnalysis 
                    amount = {props.amount} 
                    currency = {props.currency}
                    moneyAnalysis = {props.moneyAnalysis(dateRange)}
                    recurrence = {props.recurrence}
                    dateRange = {dateRange[0]}
                /> :
                <NoBudget />
            }
            </div>

        </div>
    )
}

export default BudgetSummary