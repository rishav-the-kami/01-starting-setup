import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Cards from '../UI/Card'

const ExpenseItem = (props) => {
    return (
        <li>
            <Cards className="expense-item">
                <ExpenseDate expenseDate={props.expenseDate} />
                <div className="expense-item__description">
                    <h2>{props.expenseTitle}</h2>
                    <div className="expense-item__price">${props.expenseAmount}</div>
                </div>
            </Cards>
        </li>
    )
}

export default ExpenseItem