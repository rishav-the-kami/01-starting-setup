import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpensesList = (props) => {
	if(props.filteredExpenses.length > 0) {
		return (
            <ul className="expenses-list">
                {props.filteredExpenses.map(val => (
                    <ExpenseItem
                        key={val.id}
                        expenseTitle={val.expenseTitle} 
                        expenseAmount={val.expenseAmount} 
                        expenseDate={val.expenseDate} 
                    />
		        ))}
            </ul>
        )
	}
    else 
        return <h1 className="expenses-list__fallback">NOTHINGS THERE</h1>
}

export default ExpensesList