import React from 'react'

const ExpenseFormInputs = (props) => {
    return (
        <form onSubmit={props.submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={props.enteredTitle} onChange={props.titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={props.enteredAmount} min="0.01" step="0.01" onChange={props.amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={props.enteredDate} min="2019-01-01" max="2022-12-31" onChange={props.dateChangeHandler} />
                </div>
            </div>
            <div className="new_expense__actions">
                <button onClick={props.cancelHandler}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseFormInputs