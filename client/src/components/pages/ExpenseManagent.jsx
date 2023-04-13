import React from 'react'
import AddExpense from '../expense/AddExpense'
import ExpenseTable from '../expense/ExpenseTable'

const ExpenseManagent = () => {
    return (
        <div className="w-4/5 mx-auto rounded shadow mt-10">
            <h2 className="bg-gray-200 px-4 py-2 font-bold">Expense management</h2>
            <AddExpense />
            <ExpenseTable />

        </div >
    )
}

export default ExpenseManagent