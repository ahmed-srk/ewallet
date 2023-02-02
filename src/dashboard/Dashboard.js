import React from "react";
import WalletCard from "./components/WalletCard";
import AddWallet from "./components/AddWallet";
import Overview from "../overview/Overview";

function Dashboard() {
    const [showModal, setShowModal] = React.useState(false)
    const [wallets, setWallets] = React.useState(() => JSON.parse(localStorage.getItem('wallets')) || [])
    const [selectedWallet, setSelectedWallet] = React.useState(() => JSON.parse(localStorage.getItem('selectedWallet')) || wallets[0].id)
    const [walletsTransactions, setWalletsTransactions] = React.useState(() => JSON.parse(localStorage.getItem('walletsTransactions')) || [])

    function createWallets(wallet){
        setWallets((prev) => [...prev, wallet])
        setWalletsTransactions((prev) => {
            return [...prev, {walletId: wallet.id, transactions: []}]
        })
    }

    function deleteWallets(){
        setWallets([])
        setWalletsTransactions([])
    }

    function getWalletTransactions(walletId){
        return (
            walletsTransactions.find((item) => item.walletId === walletId) ?
            walletsTransactions.find((item) => item.walletId === walletId).transactions : 
            []
        )
    }

    function updateWalletsTransactions(walletId, transaction){
        setWallets((prev) => {
            return prev.map((item) => {
                return walletId === item.id ? {...item, amount: `${Number(item.amount) - Number(transaction.amount)}`} : {...item}
            })
        })

        setWalletsTransactions((prev) => {
            return prev.map((item) => {
                return walletId === item.walletId ? {...item, transactions: [...item.transactions, transaction]} : {...item}
            })
        })
    }

    React.useEffect(() => {
        localStorage.setItem('wallets', JSON.stringify(wallets))
    }, [wallets]);

    React.useEffect(() => {
        localStorage.setItem('walletsTransactions', JSON.stringify(walletsTransactions))
    }, [walletsTransactions])

    React.useEffect(() => {
        localStorage.setItem('selectedWallet', JSON.stringify(selectedWallet))
    }, [selectedWallet])

    return (
        <div className=" dashboard flex flex-col min-h-screen px-6 sm:px-10 lg:px-16 py-2 pb-4 space-y-1">
            <h2 className=" py-4 text-2xl font-bold text-slate-700">ALL <span className=" font-light">Wallets</span></h2>    
            <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                { wallets.map((item) => <WalletCard key = {item.id} {...item} onClick={() => setSelectedWallet(item.id)} />) }
                <div className=" grid grid-cols-1 gap-2">
                    <button onClick={() => setShowModal(true)} className=" p-2 bg-white font-semibold text-green-500 rounded-md shadow-sm hover:shadow-md">Add New Wallet</button>
                    <button onClick={() => deleteWallets()} className=" p-2 bg-white font-semibold text-green-500 rounded-md shadow-sm hover:shadow-md">Delete All Wallets</button>
                </div>
            </div>
            
            { 
                wallets.map((item) => { 
                    return (
                        selectedWallet === item.id && 
                        <Overview
                            key = {item.id}
                            {...item}
                            getWalletTransactions = {(walletId) => getWalletTransactions(walletId)}
                            updateWalletsTransactions = {(walletId, transaction) => updateWalletsTransactions(walletId, transaction)}
                        />
                    )
                }) 
            }

            { showModal && <AddWallet setShowModal = {setShowModal} createWallets = {(wallet) => createWallets(wallet)} /> }
        </div>
    );
}

export default Dashboard;