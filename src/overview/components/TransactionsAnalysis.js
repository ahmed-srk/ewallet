import React from "react";
import StatsDetails from "../../generalComponents/StatsDetails" 
import { NoTransaction } from "./NoTransaction";
import { TransactionTable } from "./TransactionTable";

function TransactionsAnalysis(props){
    const [expenses, setExpenses] = React.useState(() => setInitialCosts('expenses'))
    const [income, setIncome] = React.useState(() => setInitialCosts('income'))
    const overview = [
        {title: 'Total Balance', amount: props.amount},
        {title: 'Total Period Change', amount: income - expenses},
        {title: 'Total Period Expenses', amount: -expenses},
        {title: 'Total Period Income', amount: income}
    ]

    function setInitialCosts(type){
        let sum = 0
        props.transactions.forEach((item) => {
            if(item.type === type){ sum = sum + Number(item.amount) }
        })
        return sum
    }

    React.useEffect(() => {
        setExpenses(() => setInitialCosts('expenses'))
        setIncome(() => setInitialCosts('income'))
        // eslint-disable-next-line
    }, [props.dateRange])

    React.useEffect(() => {
        setExpenses((prev) => prev + props.expense)
    }, [props.expense])

    React.useEffect(() => {
        setIncome((prev) => prev + props.income)
    }, [props.income])

    return (
        <div className=" flex flex-col space-y-2">
            <div className=" flex flex-row my-1 space-x-4 overflow-x-auto">
                { overview.map((item) => {return (<StatsDetails key={item.title} currency={props.currency} {...item} />)}) }
            </div>
            {(props.transactions.length === 0) ? <NoTransaction /> : <TransactionTable transactions={props.transactions} />}
        </div>
    )
}

export default TransactionsAnalysis