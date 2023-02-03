import React from "react"
import { format }from "date-fns"
import { nanoid } from "nanoid"
import CustomModal from "../../generalComponents/CustomModal"
import { checkErrorForm } from "../../generalComponents/checkErrorForm"
import { AddTransactionForm } from "./AddTransactionForm"

function AddTransaction(props) {
    const [transaction, setTransaction] = React.useState({
        id: nanoid(),
        type: '',
        category: '',
        date: format(new Date(), 'yyyy-MM-dd'),
        amount: '',
        currency: props.currency,
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

        props.createTransaction(transaction)
        props.setShowModal(false)
    }

    return (
        <CustomModal
            title = {`transaction`}
            setShowModal = {props.setShowModal}
            createContent = {createTransaction}
            body = {<AddTransactionForm transaction={transaction} setTransaction={setTransaction} errorMsg={errorMsg} />}
        />
    );
}

export default AddTransaction;