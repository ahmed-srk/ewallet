import React from "react";
import Wallet from "./components/Wallet";
import CustomDateRange from "./components/CustomDateRange";
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

  return (
    <div className="dashboard px-6 sm:px-10 lg:px-16 flex flex-col">
        <h2 className=" text-2xl font-bold py-5 text-slate-700">Wallets</h2>
    
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {walletsCollection}

            <div className="grid grid-cols-1 gap-2">
                <button onClick={addWallets} className="text-green-500 p-2 font-semibold rounded-md hover:shadow-md shadow-sm bg-white">Add New Wallet</button>
                <button className=" text-green-500 font-semibold p-2 rounded-md hover:shadow-md shadow-sm bg-white">Connect a Bank Account</button>
            </div>
        </div>

        <h2 className=" text-2xl font-bold py-5 text-slate-700">Overview</h2>
        
        <CustomDateRange />
    </div>
  );
}

export default Dashboard;
