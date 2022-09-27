import React, { useState } from 'react'
import AddExpense from './AddExpense'
import ExpenseFormInputs from './ExpenseFormInputs'
import './ExpenseForm.css'


const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("")
    const [enteredAmount, setEnteredAmount] = useState("")
    const [enteredDate, setEnteredDate] = useState("")

    const [isShowFormClicked, setIsShowFormClicked] = useState(false)

    const titleChangeHandler = (event) => setEnteredTitle(event.target.value)
    const amountChangeHandler = (event) => setEnteredAmount(event.target.value)
    const dateChangeHandler = (event) => setEnteredDate(event.target.value)
    const showFormHandler = () => setIsShowFormClicked(true)
    const cancelHandler = () => setIsShowFormClicked(false)

    const submitHandler = (event) => {
        event.preventDefault()

        const expenseData = {
            expenseTitle: enteredTitle,
            expenseAmount: enteredAmount,
            expenseDate: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData)

        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')

        setIsShowFormClicked(false)
    }

    return (
        <div>
            {!isShowFormClicked && <AddExpense showFormHandler={showFormHandler} />}
            {isShowFormClicked && (
                <ExpenseFormInputs
                    submitHandler={submitHandler}
                    cancelHandler={cancelHandler}
                    enteredTitle={enteredTitle} 
                    enteredAmount={enteredAmount} 
                    enteredDate={enteredDate}
                    titleChangeHandler={titleChangeHandler}
                    amountChangeHandler={amountChangeHandler}
                    dateChangeHandler={dateChangeHandler}
                />
            )}
        </div>
    )
}

export default ExpenseForm