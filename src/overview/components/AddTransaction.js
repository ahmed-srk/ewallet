import React from "react"
import { nanoid } from "nanoid"
import CustomModal from "../../generalComponents/CustomModal"
import { checkErrorForm } from "../../generalComponents/checkErrorForm"
import { AddTransactionForm } from "./AddTransactionForm"

function Addtransaction(props) {
    const [transaction, setTransaction] = React.useState({
        id: nanoid(),
        category: '',
        date: '',
        amount: '',
        currency: '',
        note: '',
    })

    const [error, setError] = React.useState(false)
    const { errorMsg } = checkErrorForm(error)

    function createTransaction(){
        for(const key in transaction){
            if(key === 'note'){ continue }
            else if (transaction[key] === '' || transaction[key] === isNaN){
                setError(true)
                return
            }
        }

        props.setTransactions(transaction)
        props.setShowModal(false)
    }

    return (
        <CustomModal
            title = {`transaction`}
            setShowModal = {props.setShowModal}
            createContent = {createTransaction}
            body = { 
                <AddTransactionForm transaction={transaction} setTransaction={setTransaction} errorMsg={errorMsg} /> 
            }
        />
    );
}

export default Addtransaction;