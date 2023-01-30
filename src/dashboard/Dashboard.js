import React from "react";
import WalletCard from "./components/WalletCard";
import AddWallet from "./components/AddWallet";
import Overview from "../overview/Overview";

function Dashboard() {
    const [showModal, setShowModal] = React.useState(false)
    const [wallets, setWallets] = React.useState(() => JSON.parse(localStorage.getItem('wallets')) || [])
    const [selectedWallet, setSelectedWallet] = React.useState(wallets[0].id)

    React.useEffect(() => {
        localStorage.setItem('wallets', JSON.stringify(wallets))
    }, [wallets]);

    console.log(selectedWallet)

    return (
        <div className=" dashboard flex flex-col min-h-screen px-6 sm:px-10 lg:px-16 py-2 pb-4 space-y-1">
            <h2 className=" py-4 text-2xl font-bold text-slate-700">Wallets</h2>    
            <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                {wallets.map((item) => { 
                    return (<WalletCard key = {item.id} onClick={() => setSelectedWallet(item.id)} {...item} />)
                })}

                <div className=" grid grid-cols-1 gap-2">
                    <button onClick={() => setShowModal(true)} className=" p-2 bg-white font-semibold text-green-500 rounded-md shadow-sm hover:shadow-md">
                        Add New Wallet
                    </button>
                    <button className=" p-2 bg-white font-semibold text-green-500 rounded-md shadow-sm hover:shadow-md">
                        Connect a Bank Account
                    </button>
                </div>
            </div>

            { 
                wallets.map((item) => { 
                    return (
                        selectedWallet === item.id && 
                        <Overview
                            key = {item.id}
                            {...item}
                        />
                    )
                }) 
            }

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