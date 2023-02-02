import React from "react";
import StatsDetails from "../../generalComponents/StatsDetails" 
import { NoTransaction } from "./NoTransaction";
import { TransactionTable } from "./TransactionTable";

function Analysis(props){
    const [expenses, setExpenses] = React.useState(() => updateExpenses())
    const overview = [
        {title: 'Total Balance', amount: props.amount},
        {title: 'Total Period Change', amount: -expenses},
        {title: 'Total Period Expenses', amount: -expenses},
        {title: 'Total Period Income', amount: '0'}
    ]

    function updateExpenses(){
        let sum = 0
        props.transactions.forEach((item) => { sum = sum + Number(item.amount) })
        return sum
    }

    React.useEffect(() => {
        setExpenses(() => updateExpenses())
        // eslint-disable-next-line
    }, [props.dateRange])

    React.useEffect(() => {
        setExpenses((prev) => prev + props.expense)
    }, [props.expense])

    return (
        <div className=" flex flex-col space-y-2">
            <div className=" flex flex-row my-1 space-x-4 overflow-x-auto">
                { overview.map((item) => {return (<StatsDetails key={item.title} currency={props.currency} {...item} />)}) }
            </div>
            {(props.transactions.length === 0) ? <NoTransaction /> : <TransactionTable transactions={props.transactions} />}
        </div>
    )
}

export default Analysis