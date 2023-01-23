import React from "react";
import Wallet from "./components/Wallet";
import CustomDateRange from "./components/CustomDateRange";
import noData from "./images/no-data.svg"
import {nanoid} from 'nanoid';

function Dashboard() {
    const [wallets, setWallets] = React.useState([
      {
        name: 'Ahmed',
        amount: '564.75'
      }
    ])

    const walletsCollection = wallets.map((item) => {
        return(
            <Wallet
                key = {nanoid()}
                {...item}
            />
        )
    })

    function addWallets(){
        setWallets((prev) => {
            return [...prev, {name: 'Not Set', amount: 'Not Set'}]
        })
    }

    const overview = [
      {title: 'Total Balance', amount: '952'},
      {title: 'Total Period Change', amount: '20'},
      {title: 'Total Period Expenses', amount: '10'},
      {title: 'Total Period Income', amount: '100'}
    ]

    return (
        <div className=" dashboard flex flex-col min-h-screen px-6 sm:px-10 lg:px-16 py-2 pb-4 space-y-1">
            <h2 className=" py-4 text-2xl font-bold text-slate-700">Wallets</h2>
        
            <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                {walletsCollection}

                <div className=" grid grid-cols-1 gap-2">
                    <button onClick={addWallets} className=" p-2 bg-white font-semibold text-green-500 rounded-md shadow-sm hover:shadow-md">
                        Add New Wallet
                    </button>
                    <button className=" p-2 bg-white font-semibold text-green-500 rounded-md shadow-sm hover:shadow-md">
                        Connect a Bank Account
                    </button>
                </div>
            </div>

            <h2 className=" py-4 text-2xl font-bold text-slate-700">Overview</h2>
            
            <CustomDateRange />

            <div className=" flex flex-row space-x-4 overflow-x-auto">
                {
                    overview.map((item) => {
                        return (
                            <div key={nanoid()} className=" min-w-[320px] md:min-w-[210px] basis-1/4 flex flex-col px-4 py-2 my-3 md:my-0 bg-white rounded-xl shadow-sm">
                                <p className=" text-base font-semibold text-slate-700">{item.title}</p>
                                <p className=" text-2xl font-normal text-green-500">{item.amount} USD</p>
                            </div>
                        )
                    })
                }
            </div>

            <div className=" flex flex-col justify-center items-center h-[560px]">
                <img className=" w-1/2 h-[240px]" src={noData} alt="no-data" />
                <span className=" text-sm font-semibold">You have no Transaction yet!</span>
            </div>
        </div>
    );
}

export default Dashboard;
