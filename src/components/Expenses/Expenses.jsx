import React, { useState } from 'react'
import ExpensesList from './ExpensesList'
import './Expenses.css'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'

const Expenses = (props) => {
	const [selectedYear, setSelectedYear] = useState("2022")

	const yearChangeHandler = (year) => setSelectedYear(year)

	const filteredExpenses = props.items.filter(val => val.expenseDate.getFullYear().toString() === selectedYear)

    return (
		<Card className="expenses">
			<ExpenseFilter onYearChange={yearChangeHandler} />
			<ExpensesList filteredExpenses={filteredExpenses} />
		</Card>
    )
}

export default Expenses