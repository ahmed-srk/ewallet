import React from "react"
import CustomModal from "../../generalComponents/CustomModal"
import { AddBudgetForm } from "./AddBudgetForm"
import { checkErrorForm } from "../../generalComponents/checkErrorForm"

function AddBudget(props) {
    const [budget, setBudget] = React.useState({
        name: '',
        amount: '',
        currency: '',
        budgetedFor: '',
        recurrence: 30,
        startDate: ''
    })

    const [error, setError] = React.useState(false)
    const { errorMsg } = checkErrorForm(error)

    function createBudget(){
        for(const key in budget){
            if(budget[key] === '' || budget[key] === isNaN){
                setError(true)
                return
            }
        }
        
        props.setBudgets(budget)
        props.setShowModal(false)
    }

    return (
        <CustomModal
            title = {`budget`}
            setShowModal = {props.setShowModal}
            createContent = {createBudget}
            body = { <AddBudgetForm budget={budget} setBudget={setBudget} errorMsg={errorMsg}  /> }
        />   
    );
}

export default AddBudget;