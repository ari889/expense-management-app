import React, { useEffect } from 'react'
import AddExpense from '../expense/AddExpense'
import ExpenseTable from '../expense/ExpenseTable'
import { useDispatch, useSelector } from 'react-redux';
import fetchAllExpnese from '../../redux/expense/thunk/fetchAllExpense';

const ExpenseManagent = () => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);


    useEffect(() => {
        dispatch(fetchAllExpnese(auth?.user?.id));
    }, [dispatch, auth]);

    const expenses = useSelector(state => state.expense.expenses);

    const totalIncome = expenses.filter(expense => expense.type === 'income').map((item) => item.amount).reduce((prevIncome, currentIncome) => prevIncome + currentIncome, 0);
    const totalExpense = expenses.filter(expense => expense.type === 'expense').map((item) => item.amount).reduce((prevIncome, currentIncome) => prevIncome + currentIncome, 0);

    return (
        <div className="w-4/5 mx-auto rounded shadow mt-10">
            <h2 className="bg-gray-200 px-4 py-2 font-bold">Summary</h2>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Amount
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">Total Income</td>
                            <td scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">{totalIncome}</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">Total Expese</td>
                            <td scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">{totalExpense}</td>
                        </tr>
                    </tbody>
                    <tfoot className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Total Revenue
                            </th>
                            <th scope="col" className="px-6 py-3">
                                {totalIncome - totalExpense}
                            </th>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <h2 className="bg-gray-200 px-4 py-2 font-bold">Expense management</h2>
            <AddExpense />
            <ExpenseTable />

        </div >
    )
}

export default ExpenseManagent