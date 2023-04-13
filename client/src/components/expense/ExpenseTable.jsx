import React, { useEffect } from 'react'
import Expense from './Expense'
import { useDispatch, useSelector } from 'react-redux'
import fetchAllExpnese from '../../redux/expense/thunk/fetchAllExpense';

const ExpenseTable = () => {
    const expenses = useSelector(state => state.expense.expenses);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllExpnese);
    }, [dispatch]);

    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-center">
                            SL
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Type
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Amount
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense, index) => <Expense key={expense._id} expense={expense} index={index} />)}
                </tbody>
            </table>
        </div>
    )
}

export default ExpenseTable