import React from "react"
import { nanoid } from "nanoid"
import CustomModal from "../../generalComponents/CustomModal"
import { checkErrorForm } from "../../generalComponents/checkErrorForm"
import { AddWalletForm } from "./AddWalletForm"

function AddWallet(props) {
    const [wallet, setWallet] = React.useState({
        id: nanoid(),
        name: '',
        currency: '',
        amount: '',
    })

    const [error, setError] = React.useState(false)
    const { errorMsg } = checkErrorForm(error)

    function createWallet(){
        for(const key in wallet){
            if(key === 'amount'){ continue }
            else if (wallet[key] === '' || wallet[key] === isNaN){
                setError(true)
                return
            }
        }
        
        props.setWallets(wallet)
        props.setShowModal(false)
    }

    return (
        <CustomModal
            title = {`wallet`}
            setShowModal = {props.setShowModal}
            createContent = {createWallet}
            body = { <AddWalletForm wallet={wallet} setWallet={setWallet} errorMsg={errorMsg}  /> }
        />
    );
}

export default AddWallet;