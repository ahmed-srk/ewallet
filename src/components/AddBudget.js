import React from "react"

function AddBudget(props) {
    const [budget, setBudget] = React.useState({
        name: '',
        amount: 100,
        currency: '',
        budgetedFor: '',
        recurrence: 30,
        startDate: ''
    })

    const [error, setError] = React.useState(false)

    const errorMsg = {
        text: 'This field is required!',
        styleText: {
            color: 'red',
            fontSize: '10.5px',
            lineHeight: '12px',
            display: error ? 'block' : 'none',
        },
        styleTextBox: function(prop){
            return !prop ? { borderColor: error && 'red' } : {}
        }
    }

    const recur = [
        {title: 'daily', value: 1},
        {title: 'weekly', value: 7},
        {title: 'biweekly', value: 14},
        {title: 'monthly', value: 30},
        {title: 'yearly', value: 365},
    ]

    function handleChange(event){
        const {name, value, type} = event.target
        setBudget((prev) => ({...prev, [name]: type === 'radio' ? Number(value) : value}))
    }

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
        <div>
            <div className=" flex justify-center items-center overflow-y-auto overflow-x-hidden fixed h-full inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto h-full">
                    {/*content*/}
                    <div className=" relative flex flex-col w-full p-4 space-y-6 bg-white rounded shadow-lg outline-none focus:outline-none">
                        {/*header*/}
                        <div className=" flex items-start justify-between border-solid border-slate-200 rounded-t">
                            <h3 className=" text-3xl font-light">
                                Add New Budget
                            </h3>
                            <button onClick={() => props.setShowModal(false)}
                                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
                                <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                </span>
                            </button>
                        </div>

                        {/*body*/}
                        <div className="relative flex-auto">
                            <form className=" from-orange-400 grid grid-cols-2 gap-x-3 grid-flow-row">
                                <h2 className=" mb-3 text-xl font-normal text-black" >General Info</h2>
                                <div className=" col-start-1 mb-3">
                                    <h4 className=" text-sm font-light text-gray-500">Budget Name</h4>
                                    <input  type="text" name="name" value={budget.name} onChange={handleChange} required={true} style={errorMsg.styleTextBox(budget.name)}
                                            className={`form-input w-full p-1 focus:ring-0 rounded-md border-gray-200 focus:border-gray-400 hover:border-gray-300`}
                                    />
                                    <p style={errorMsg.styleText}>{!budget.name && errorMsg.text}</p>
                                </div>
                                <div className=" col-start-1">
                                    <h4 className=" text-sm font-light text-gray-500">Amount</h4>
                                    <input  className=" form-input w-full p-1 focus:ring-0 rounded-md border-gray-200 focus:border-gray-400 hover:border-gray-300"
                                            type="number" name="amount" value={budget.amount} onChange={handleChange} style={errorMsg.styleTextBox(budget.amount)}
                                    />
                                    <p style={errorMsg.styleText}>{!budget.amount && errorMsg.text}</p>
                                </div>
                                <div>
                                    <h4 className=" text-sm font-light text-gray-500">Currency</h4>
                                    <select className=" form-select w-full px-2 py-1 focus:ring-0 rounded-md border-gray-200 focus:border-gray-400 hover:border-gray-300"
                                            placeholder="Type Bottom Text" name="currency" value={budget.currency} onChange={handleChange} style={errorMsg.styleTextBox(budget.currency)}
                                    >
                                        <option value="">-- Choose Currency --</option>
                                        <option value="cn-yuan">CN Yuan</option>
                                        <option value="eu">Euro</option>
                                        <option value="tz-shillings">TZ Shillings</option>
                                        <option value="us-dollars">US Dollars</option>
                                        <option value="uae-dirham">UAE Dirham</option>
                                    </select>
                                    <p style={errorMsg.styleText}>{!budget.currency && errorMsg.text}</p>
                                </div>

                                <h2 className=" mt-6 mb-3 text-xl font-normal text-black" >Budget Filter</h2>
                                <div className=" col-start-1 col-span-1">
                                    <h4 className=" text-sm font-light text-gray-500">Budgeted for</h4>
                                    <select name="budgetedFor" value={budget.budgetedFor} onChange={handleChange} style={errorMsg.styleTextBox(budget.budgetedFor)}
                                            className=" form-select w-full px-1 focus:ring-0 py-1 rounded-md border-gray-200 focus:border-gray-400 hover:border-gray-300"
                                    >
                                        <option value="">-- All Categories --</option>
                                        <option value="expenditure">Expenditure</option>
                                        <option value="food">Food</option>
                                        <option value="rent">Rent</option>
                                        <option value="transport">Transport</option>
                                    </select>
                                    <p style={errorMsg.styleText}>{!budget.budgetedFor && errorMsg.text}</p>
                                </div>

                                <h2 className=" col-start-1 mt-6 mb-3 text-xl font-normal text-black" >Budget Period</h2>
                                <div className=" col-start-1 col-span-2 mb-3">
                                    <h4 className=" text-sm font-light text-gray-500">Recurrence</h4>

                                    <ul className="grid grid-flow-col gap-x-3 overflow-x-auto p-3">
                                        {
                                            recur.map((item) => {
                                                return (
                                                    <li key={item.value} className="">
                                                        <input className="sr-only peer" type="radio" value={item.value} name="recurrence" id={item.title} checked={budget.recurrence === item.value} onChange={handleChange} />
                                                        <label  className=" flex justify-center items-center px-4 py-1 bg-gray-200 rounded-3xl text-gray-500 cursor-pointer
                                                                            focus:outline-none peer-checked:bg-green-500 peer-checked:text-white" 
                                                                htmlFor={item.title}>
                                                            {item.title[0].toUpperCase() + item.title.substring(1)}
                                                        </label>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>   
                                </div>

                                <div className=" col-start-1 col-span-1">
                                    <h4 className=" text-sm font-light text-gray-500">Start Date</h4>
                                    <input  type="date" className=" form-input w-full px-2 focus:ring-0 py-2 rounded-md border-gray-200 focus:border-gray-400 hover:border-gray-300"
                                            value={budget.startDate} name="startDate" onChange={handleChange} style={errorMsg.styleTextBox(budget.startDate)}
                                    />
                                    <p style={errorMsg.styleText}>{!budget.startDate && errorMsg.text}</p>
                                </div>                                
                            </form>
                        </div>

                        {/*footer*/}
                        <div className="flex items-center justify-end border-solid border-slate-200 rounded-b">
                            <button onClick={() => props.setShowModal(false)} 
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                Close
                            </button>
                            <button onClick={createBudget} type="submit"
                                    className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-8 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                Create A Budget
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>      
    );
}

export default AddBudget;