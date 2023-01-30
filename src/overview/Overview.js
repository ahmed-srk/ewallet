import React from "react";
import CustomDateRange from "../generalComponents/CustomDateRange";
import StatsDetails from "../generalComponents/StatsDetails"
import noData from "../images/no-data.svg"
import AddTransaction from "./components/AddTransaction";

function Overview(props){
    // eslint-disable-next-line
    const [transactions, setTransactions] = React.useState([])
    const [showModal, setShowModal] = React.useState(false)
    const overview = [
        {title: 'Total Balance', amount: props.amount},
        {title: 'Total Period Change', amount: '0'},
        {title: 'Total Period Expenses', amount: '0'},
        {title: 'Total Period Income', amount: '0'}
    ]

    return(
        <div>
            <h2 className=" py-4 text-2xl font-bold text-slate-700">Overview</h2>            
            <div className=" grid grid-cols-4 gap-3 py-1">
                <button className=" col-span-4 sm:col-span-2 md:col-span-1 p-2 bg-green-500 text-white font-semibold rounded-md shadow-md hover:shadow-lg"
                        onClick={() => setShowModal(true)}>
                    Add Transaction
                </button>
                <div className=" col-span-4 md:col-start-3 md:col-span-2">
                    <CustomDateRange />
                </div>  
            </div>
            <div className=" flex flex-row my-1 space-x-4 overflow-x-auto">
                { overview.map((item) => {return (<StatsDetails key = {item.title} {...item} currency={props.currency} />) }) }
            </div>
            <div className=" flex flex-col justify-center items-center h-[560px]">
                <img className=" w-1/2 h-[240px]" src={noData} alt="no-data" />
                <span className=" text-sm font-semibold">You have no Transaction yet!</span>
            </div>

            {
                showModal &&
                <AddTransaction
                    setShowModal = {setShowModal}
                    setTransactions = {(transaction) => {
                        setTransactions((prev) => {
                            return [...prev, transaction]
                        })
                    }}
                />
            }
        </div>
    )
}

export default Overview