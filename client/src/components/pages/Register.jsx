import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    errors: "",
    message: "",
    loading: false,
    togglePassword: false
};

const Register = () => {
    const [state, setState] = useState(initialState);
    const navigate = useNavigate();

    const handleOnChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setState({
            ...state,
            loading: true
        });
        let obj = {
            name: state.name,
            email: state.email,
            password: state.password,
            confirmPassword: state.confirmPassword
        }
        axios.post('/user/register', obj).then(response => {
            setState(initialState);
            localStorage.setItem("EMA_", response.data.token);
            navigate('/expense-management');
        }).catch(err => {
            setState({
                ...state,
                errors: err.response.data.errors,
                loading: false
            })
        });
    }

    const togglePassword = () => {
        setState(prevState => ({
            ...state,
            togglePassword: !prevState.togglePassword
        }))
    }

    return (
        <div className="w-96 mx-auto bg-gray-100 my-10 p-10 rounded shadow">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name" className="text-base block mb-3">
                    Name
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Full name"
                    className={`border-2 border-gray-300 px-5 py-2 outline-none rounded w-full ${state?.errors?.name ? 'border-red-500' : 'mb-3'} focus:border-blue-400 transition delay-75 disabled:bg-gray-100`}
                    disabled={state.loading}
                    onChange={handleOnChange}
                    value={state.name}
                />
                {state?.errors?.name && (<span className="text-red-500 mb-3 mt-1 block">{state?.errors?.name?.msg}</span>)}
                <label htmlFor="email" className="text-base block">
                    Email
                </label>
                <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Valid Email"
                    className={`border-2 border-gray-300 px-5 py-2 outline-none rounded w-full ${state?.errors?.email ? 'border-red-500' : 'mb-3'} focus:border-blue-400 transition delay-75 disabled:bg-gray-100`}
                    disabled={state.loading}
                    onChange={handleOnChange}
                    value={state.email}
                />
                {state?.errors?.email && (<span className="text-red-500 mb-3 mt-1 block">{state?.errors?.email?.msg}</span>)}
                <label htmlFor="password" className="text-base block mb-3">
                    Password
                </label>
                <div className={`flex flex-row justify-start items-center ${state?.errors?.password ? '' : 'mb-3'}`}>
                    <input
                        id="password"
                        name="password"
                        type={`${state.togglePassword ? 'text' : "password"}`}
                        placeholder="Enter Password"
                        className={`border-2 border-gray-300 px-5 py-2 outline-none rounded border-e-0 rounded-e-none w-full ${state?.errors?.password ? 'border-red-500' : ''} focus:border-blue-400 transition delay-75 disabled:bg-gray-100`}
                        disabled={state.loading}
                        onChange={handleOnChange}
                        value={state.password}
                    />
                    <button type="button" onClick={togglePassword} className={`bg-gray-300 px-5 py-2 rounded rounded-s-none border-2 border-s-0 border-gray-300 ${state?.errors?.password ? 'border-red-500' : ''}`}>{state.togglePassword ? 'Hide' : 'Show'}</button>
                </div>
                {state?.errors?.password && (<span className="text-red-500 mb-3 mt-1 block">{state?.errors?.password?.msg}</span>)}
                <label htmlFor="confirmPassword" className="text-base block mb-3">
                    Confirm Password
                </label>
                <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Enter Password"
                    className={`border-2 border-gray-300 px-5 py-2 outline-none rounded w-full ${state?.errors?.confirmPassword ? 'border-red-500' : 'mb-3'} focus:border-blue-400 transition delay-75 disabled:bg-gray-100`}
                    disabled={state.loading}
                    onChange={handleOnChange}
                    value={state.confirmPassword}
                />

                {state?.errors?.confirmPassword && (<span className="text-red-500 mb-3 mt-1 block">{state?.errors?.confirmPassword?.msg}</span>)}
                <button
                    type="submit"
                    className="w-full px-3 py-2 bg-blue-600 text-white mt-5 hover:bg-blue-800 transition delay-75 rounded disabled:bg-blue-300"
                    disabled={state.loading}
                >
                    Login
                </button>
                <p className="text-base text-gray-500 mt-3">
                    Already have a account?
                    <Link to="/" className="text-blue-800 ms-2">
                        Login
                    </Link>
                </p>
            </form>
        </div>
    )
}

export default Register