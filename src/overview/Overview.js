import React from "react";
import { addDays, isWithinInterval } from "date-fns";
import CustomDateRange, { setDateFormat } from "../generalComponents/CustomDateRange";
import AddTransaction from "./components/AddTransaction";
import TransactionsAnalysis from "./components/TransactionsAnalysis";

function Overview(props){
    const [transactions, setTransactions] = React.useState(() => props.getWalletTransactions(props.id))
    const [dateRange, setDateRange] = React.useState(
        () => setDateFormat('dateRange') ||
        [{ key: 'selection', startDate: addDays(new Date(), -7), endDate: new Date() }]
    )
    const [expense, setExpense] = React.useState(0)
    const [income, setIncome] = React.useState(0)
    const [showModal, setShowModal] = React.useState(false)

    function createTransaction(transaction){
        setTransactions((item) => [...item, transaction])
        props.updateWalletsTransactions(props.id, transaction)
        if(isWithinInterval(new Date(transaction.date), {start: new Date(dateRange[0].startDate), end: new Date(dateRange[0].endDate)})){
            if(transaction.type === 'expenses'){
                setExpense((prev) => prev + Number(transaction.amount))
            }
            else{
                setIncome((prev) => prev + Number(transaction.amount))
            }
        }
    }

    function changeDateRange(range){
        setDateRange( [{key:'selection', startDate: range[0].startDate, endDate: range[0].endDate}] )
    }

    React.useEffect(() => {
        localStorage.setItem('dateRange', JSON.stringify(dateRange))
    }, [dateRange]);

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
                <div className=" col-span-4 md:col-start-3 md:col-span-2"><CustomDateRange dateRange={dateRange} changeDateRange={(range) => changeDateRange(range)} /></div>  
            </div>
            <TransactionsAnalysis 
                transactions={transactions.filter((item) => isWithinInterval(new Date(item.date), {start: dateRange[0].startDate, end: addDays(dateRange[0].endDate, 1)}))} 
                currency={props.currency} 
                amount={props.amount}
                dateRange={dateRange}
                expense={expense}
                income={income}
            />
            
            { showModal && <AddTransaction currency={props.currency} setShowModal={setShowModal} createTransaction={(transaction) => createTransaction(transaction)} /> }
        </div>
    )
}

export default Overview