import React from "react";

export function TransactionTable(props){
    return (
        <div>
            <div className=" grid grid-cols-5 justify-items-center p-2 mb-1 text-lg text-slate-900 font-bold bg-white rounded-md">
                <p>Category</p>
                <p>Amount</p>
                <p>Currency</p>
                <p>Date</p> 
                <p>Note</p>                   
            </div>
            
            {
                props.transactions.map((item) => {
                    return (
                        <div key={item.id} className=" grid grid-cols-5 justify-items-center p-2 mb-1 text-slate-600 text-md font-medium bg-white shadow-sm rounded-md">
                            <p>{item.category[0].toUpperCase() + item.category.substring(1)}</p>
                            <p>{item.amount}</p>
                            <p>{item.currency.toUpperCase()}</p>
                            <p>{item.date}</p>
                            <p>{item.note ? item.note : `-`}</p>
                        </div>
                    )
                })
            }
        </div> 
    )
}