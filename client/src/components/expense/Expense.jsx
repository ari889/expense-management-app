import React from 'react'
import Swal from 'sweetalert2';
import deleteExpenseThunk from '../../redux/expense/thunk/deleteExpense';
import { useDispatch } from 'react-redux';

const Expense = ({ index, expense }) => {
    const { name, type, amount, _id } = expense;
    const dispatch = useDispatch();

    /**
     * delete expense
     */
    const handleDelete = (e, id) => {
        e.preventDefault();
        Swal.fire({
            title: 'Are you sure to delete?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteExpenseThunk(id));
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                {index + 1}
            </td>
            <td className="px-6 py-4">
                {name}
            </td>
            <td className="px-6 py-4 text-center">
                {type}
            </td>
            <td className="px-6 py-4 text-center">
                {amount}
            </td>
            <td className="px-6 py-4 text-center">
                <a href="#" onClick={(event) => handleDelete(event, _id)}>
                    <i className="fas fa-trash"></i>
                </a>
            </td>
        </tr>
    )
}

export default Expense