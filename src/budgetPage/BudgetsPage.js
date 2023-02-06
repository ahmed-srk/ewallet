import React from "react";
import BudgetSummary from "../budgetSummary/BudgetSummary";
import BudgetCard from "./components/BudgetCard";
import AddBudget from "./components/AddBudget"
import { addDays, isWithinInterval } from "date-fns";
import {nanoid} from 'nanoid';

function Budgets() {
    const [budgets, setBudgets] = React.useState(() => JSON.parse(localStorage.getItem('budgets')) || [])
    const [selectedBudget, setSelectedBudget] = React.useState(() => JSON.parse(localStorage.getItem('selectedBudget')))
    const [budgetsDateRange, setBudgetsDateRange] = React.useState(() => JSON.parse(localStorage.getItem('budgetsDateRange')) || [])
    // eslint-disable-next-line
    const [walletsTransactions, setWalletsTransactions] = React.useState(() => JSON.parse(localStorage.getItem('walletsTransactions')) || [])
    const [showModal, setShowModal] = React.useState(false)

    function createBudget(budget){
        setBudgets((prev) => [...prev, budget])
        setBudgetsDateRange((prev) => {
            const today = new Date()
            let sDate = new Date(budget.startDate)
            let eDate = addDays(sDate, budget.recurrence - 1)
            let inRange = false

            while(!inRange){
                const isWithinRange = isWithinInterval(today, {start: sDate, end: eDate})
                if(isWithinRange){
                    inRange = true
                }
                else{
                    sDate = addDays(eDate, 1)
                    eDate = addDays(sDate, budget.recurrence - 1)
                }
            }

            return [
                ...prev, 
                {budgetId: budget.id, dateRange: [{ key: 'selection', startDate: sDate, endDate: eDate }]}
            ]
        })
    }

    function deleteBudgets(){
        setBudgets([])
        setBudgetsDateRange([])
    }

    function getBudgetDateRange({id, startDate, recurrence}){
        return (
            budgetsDateRange.find((item) => item.budgetId === id) ?
            budgetsDateRange.find((item) => item.budgetId === id).dateRange :
            [{ key: 'selection', startDate: new Date(startDate), endDate: addDays(new Date(startDate), recurrence-1) }]
        )
    }

    function checkCategoryExpenses({amount, category, currency}, dateRange){
        let expenses = 0
        walletsTransactions.forEach((item) => {
            item.transactions.forEach((item) => {
                if( 
                    item.category === category && 
                    isWithinInterval(new Date(item.date), {start: new Date(dateRange[0].startDate), end: new Date(dateRange[0].endDate)}) &&
                    item.currency === currency
                ){
                    expenses = expenses + Number(item.amount)
                }
            })
        })
        return {expenses: expenses, moneyLeft: amount - expenses}
    }

    React.useEffect(() => {
        localStorage.setItem('budgets', JSON.stringify(budgets))
    }, [budgets])

    React.useEffect(() => {
        localStorage.setItem('selectedBudget', JSON.stringify(selectedBudget))
    }, [selectedBudget])

    React.useEffect(() => {
        localStorage.setItem('budgetsDateRange', JSON.stringify(budgetsDateRange))
    }, [budgetsDateRange])

    return (
        <div className="budgets flex flex-col min-h-screen px-6 sm:px-10 lg:px-16 py-2 pb-4 space-y-1 ">
            <h2 className=" py-4 text-2xl font-bold text-slate-700">ALL <span className=" font-light">Budgets</span></h2>
            <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                { 
                    budgets.map((item) => {
                        return (
                            <BudgetCard 
                                key = {nanoid()} 
                                {...item}
                                onClick = {() => setSelectedBudget(item.id)}
                                moneyAnalysis = {checkCategoryExpenses(item, getBudgetDateRange(item))}
                                dateRange = {getBudgetDateRange(item)}
                            />
                        )
                    })
                }

                <div className=" flex flex-col justify-center items-center bg-white space-y-3 rounded-md min-h-[210px] px-2 lg:px-5">
                    <p className=" text-center text-md text-slate-500">Take Control of your money and Save more money with Budgets!</p>
                    <button className=" p-2 bg-green-500 font-semibold text-white rounded shadow-sm hover:shadow-md " onClick={() => setShowModal(true)}>Create a New Budget</button>
                    <button disabled={budgets.length === 0 && true} onClick={() => deleteBudgets()} className={`p-2 font-semibold text-white rounded-md shadow-sm hover:shadow-md ${budgets.length > 0 ? `bg-red-600` : `bg-gray-500`}`}>Delete All Budgets</button>
                </div>
            </div>

            {
                budgets.map((item) => {
                    return (
                        selectedBudget === item.id &&
                        <BudgetSummary 
                            key={item.id} 
                            {...item}
                            moneyAnalysis={(dateRange) => checkCategoryExpenses(item, dateRange)}
                            budgetDateRange = {getBudgetDateRange(item)}
                        />
                    )
                })
            }

            { showModal && <AddBudget setShowModal = {setShowModal} createBudget = {(budget) => createBudget(budget)} /> }
        </div>
    );
}

export default Budgets;