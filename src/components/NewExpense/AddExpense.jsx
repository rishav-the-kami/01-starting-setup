import React from 'react'

const AddExpense = (props) => {
    return (
        <div className="new_expense__actions">
            <button onClick={props.showFormHandler}>Add Expense</button>
        </div>
    )
}

export default AddExpense