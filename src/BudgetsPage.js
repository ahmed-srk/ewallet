import React from "react";
import BudgetCard from "./components/BudgetCard";
import AddBudget from "./components/AddBudget"
import {nanoid} from 'nanoid';


function Budgets() {
    const [budgets, setBudgets] = React.useState([])

    const [showModal, setShowModal] = React.useState(false)

    return (
        <div className="budgets flex flex-col min-h-screen px-6 sm:px-10 lg:px-16 py-2 pb-4 space-y-1 ">
            <h2 className=" py-4 text-2xl font-bold text-slate-700">Budgets</h2>
            <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                {
                    budgets.map(({name, amount, startDate, recurrence}) => (
                        <BudgetCard
                            key = {nanoid()}
                            name = {name}
                            amount = {amount}
                            startDate = {startDate}
                            recurrence = {recurrence}
                        />)
                    )
                }

                <div className=" flex flex-col justify-center items-center bg-white space-y-3 rounded-md min-h-[210px] px-2 lg:px-5">
                    <p className=" text-center text-md text-slate-500">Take Control of your money and Save more money with Budgets!</p>
                    <button onClick={() => setShowModal(true)} 
                        className=" p-2 bg-green-500 font-semibold text-white rounded shadow-sm hover:shadow-md ">
                        Create a New Budget
                    </button>
                </div>
            </div>

            {
                showModal && 
                <AddBudget 
                    setShowModal = {setShowModal}
                    setBudgets = {(budget) => {
                        setBudgets((prev) => {
                            return [...prev, budget]
                        })
                    }}
                />
            }
        </div>
    );
}

export default Budgets;
