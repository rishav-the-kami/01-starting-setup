import React, { useState } from 'react'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

const idfk = [
	// { id: "1", expenseTitle: "RANDOM SHIT IDK JAJAJAJA", expenseAmount: 296.69, expenseDate: new Date(2022, 8, 8) },
	{ id: "2", expenseTitle: "KOOKY'S BDAY", expenseAmount: 420.21, expenseDate: new Date(2022, 9, 17) },
	{ id: "0", expenseTitle: "NOT MINE BDAY", expenseAmount: 420.21, expenseDate: new Date(2022, 9, 27) },
	{ id: "q", expenseTitle: "NOOBS BDAY", expenseAmount: 699.21, expenseDate: new Date(2022, 10, 17) },
	{ id: "3", expenseTitle: "MAH BDAY", expenseAmount: 69.42021, expenseDate: new Date(2020, 11, 2) },
	{ id: "4", expenseTitle: "REET'S BDAY", expenseAmount: 96.69, expenseDate: new Date(2019, 8, 21) }
]

const App = () => {
	const [expenses, setExpenses] = useState(idfk)

	const addExpenseHandler = (expense) => {
		setExpenses((prevExpense) => [expense, ...prevExpense])
	}

  	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
  	)
}

export default App