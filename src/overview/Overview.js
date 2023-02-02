import React from "react";
import { isWithinInterval } from "date-fns";
import CustomDateRange, { setDateFormat } from "../generalComponents/CustomDateRange";
import AddTransaction from "./components/AddTransaction";
import Analysis from "./components/Analysis";

function Overview(props){
    const [transactions, setTransactions] = React.useState(() => props.getWalletTransactions(props.id))
    const [dateRange, setDateRange] = React.useState(() => setDateFormat('dateRange')[0])
    const [expense, setExpense] = React.useState(0)
    const [showModal, setShowModal] = React.useState(false)

    function createTransaction(transaction){
        setTransactions((item) => [...item, transaction])
        setExpense((prev) => prev + Number(transaction.amount))
        props.updateWalletsTransactions(props.id, transaction)
    }

    function changeDateRange(startDate, endDate){
        setDateRange((prev) => {
            return {...prev, startDate: startDate, endDate: endDate}
        })
    }

    return(
        <div>
            <h2 className=" py-4 text-2xl font-bold text-slate-700">
                {props.name[0].toUpperCase() + props.name.substring(1).toLowerCase()} <span className=" font-light">Overview</span>
            </h2>            
            <div className=" grid grid-cols-4 gap-3 py-1">
                <button className=" col-span-4 sm:col-span-2 md:col-span-1 p-2 bg-green-500 text-white font-semibold rounded-md shadow-md hover:shadow-lg"
                        onClick={() => setShowModal(true)}>
                    Add Transaction
                </button>
                <div className=" col-span-4 md:col-start-3 md:col-span-2"><CustomDateRange changeDateRange={({startDate, endDate}) => changeDateRange(startDate, endDate)} /></div>  
            </div>
            <Analysis 
                transactions={transactions.filter((item) => isWithinInterval(new Date(item.date), {start: dateRange.startDate, end: dateRange.endDate}))} 
                currency={props.currency} 
                amount={props.amount}
                dateRange={dateRange}
                expense={expense}
            />
            
            { showModal && <AddTransaction currency={props.currency} setShowModal={setShowModal} createTransaction={(transaction) => createTransaction(transaction)} /> }
        </div>
    )
}

export default Overview