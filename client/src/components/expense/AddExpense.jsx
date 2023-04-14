import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Alert from '../Alert';
import axios from '../../utils/axios';
import { addExpense } from '../../redux/expense/actions';

const initialState = {
    name: "",
    type: "",
    amount: "",
    errors: {},
    message: "",
    status: ""
};


const AddExpense = () => {
    const [state, setState] = useState(initialState);
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    const handleOnChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/expense/create', {
            name: state.name,
            type: state.type,
            amount: state.amount,
            user: auth.user.id
        }).then(response => {
            const obj = {
                name: response.data.name,
                type: response.data.type,
                amount: response.data.amount,
                _id: response.data._id
            }
            dispatch(addExpense(obj));
            setState({
                ...initialState,
                message: response.data.message,
                status: response.data.status
            });
        })
            .catch(err => {
                setState({
                    ...state,
                    errors: err.response.data.errors,
                    loading: false
                })
            });
    }

    return (
        <form onSubmit={handleSubmit} className="p-5">
            {state?.errors?.common?.msg && <Alert message={state?.errors?.common?.msg} type="danger" />}
            {state?.message && <Alert message={state?.message} type="success" />}
            <div className="mb-3">
                <label htmlFor="name" className="text-base block mb-2">Name</label>
                <input type="text" value={state.name} onChange={handleOnChange} id="name" name="name" className={`border-2 border-gray-300 px-5 py-2 outline-none rounded w-full ${state?.errors?.name ? 'border-red-500' : ''} focus:border-blue-400 transition delay-75 disabled:bg-gray-100`} />
                {state?.errors?.name && (<span className="text-red-500 mb-3 mt-1 block">{state?.errors?.name?.msg}</span>)}
            </div>
            <div className="mb-3">
                <label htmlFor="type" className="text-base block mb-2">Type</label>
                <select name="type" onChange={handleOnChange} id="type" value={state.type} className={`border-2 border-gray-300 px-5 py-2 outline-none rounded w-full ${state?.errors?.type ? 'border-red-500' : ''} focus:border-blue-400 transition delay-75 disabled:bg-gray-100`}>
                    <option value="">Please select type</option>
                    <option value="expense">Expense</option>
                    <option value="income">Income</option>
                </select>
                {state?.errors?.type && (<span className="text-red-500 mb-3 mt-1 block">{state?.errors?.type?.msg}</span>)}
            </div>
            <div className="mb-3">
                <label htmlFor="amount" className="text-base block mb-2">Amount</label>
                <input type="number" value={state.amount} min={0} onChange={handleOnChange} id="amount" name="amount" className={`border-2 border-gray-300 px-5 py-2 outline-none rounded w-full ${state?.errors?.amount ? 'border-red-500' : 'mb-3'} focus:border-blue-400 transition delay-75 disabled:bg-gray-100`} />
                {state?.errors?.amount && (<span className="text-red-500 mb-3 mt-1 block">{state?.errors?.amount?.msg}</span>)}
            </div>
            <button
                type="submit"
                className="table ms-auto px-3 py-2 bg-blue-600 text-white mt-5 hover:bg-blue-800 transition delay-75 rounded"
            >
                Add New
            </button>
        </form>
    )
}

export default AddExpense