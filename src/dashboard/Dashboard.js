import React from "react";
import Wallet from "./components/WalletCard";
import CustomDateRange from "../generalComponents/CustomDateRange";
import StatsDetails from "../generalComponents/StatsDetails";
import AddWallet from "./components/AddWallet";
import noData from "../images/no-data.svg"
import {nanoid} from 'nanoid';

function Dashboard() {
    const [showModal, setShowModal] = React.useState(false)
    const [wallets, setWallets] = React.useState(() => JSON.parse(localStorage.getItem('wallets')) || [])
    const overview = [
        {title: 'Total Balance', amount: '952'},
        {title: 'Total Period Change', amount: '20'},
        {title: 'Total Period Expenses', amount: '10'},
        {title: 'Total Period Income', amount: '100'}
    ]

    React.useEffect(() => {
        localStorage.setItem('wallets', JSON.stringify(wallets))
    }, [wallets]);

    return (
        <div className=" dashboard flex flex-col min-h-screen px-6 sm:px-10 lg:px-16 py-2 pb-4 space-y-1">
            <h2 className=" py-4 text-2xl font-bold text-slate-700">Wallets</h2>    
            <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                { wallets.map((item) => { return (<Wallet key = {nanoid()} {...item} />)}) }

                <div className=" grid grid-cols-1 gap-2">
                    <button onClick={() => setShowModal(true)} className=" p-2 bg-white font-semibold text-green-500 rounded-md shadow-sm hover:shadow-md">
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
                { overview.map((item) => { return (<StatsDetails key = {nanoid()} {...item} />)}) }
            </div>
            <div className=" flex flex-col justify-center items-center h-[560px]">
                <img className=" w-1/2 h-[240px]" src={noData} alt="no-data" />
                <span className=" text-sm font-semibold">You have no Transaction yet!</span>
            </div>

            {
                showModal && 
                <AddWallet
                    setShowModal = {setShowModal}
                    setWallets = {(wallet) => {
                        setWallets((prev) => {
                            return [...prev, wallet]
                        })
                    }}
                />
            }
        </div>
    );
}

export default Dashboard;