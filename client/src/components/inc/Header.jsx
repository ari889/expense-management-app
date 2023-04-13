import React from 'react'
import { NavLink } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const auth = useAuth();
    return (
        <div className="w-4/5 mx-auto">
            <nav className="flex flex-row justify-between items-center">
                <h3 className="text-xl">EMA</h3>
                {auth && (
                    <ul className="flex flex-row justify-between items-center">
                        <li>
                            <NavLink to="/expense-management" className="px-3 py-1 transition delay-75 rounded hover:bg-gray-200">Expenase Management</NavLink>
                        </li>
                    </ul>
                )}
                <ul className="flex flex-row justify-between items-center">
                    {auth ? (
                        <li>
                            <a href="#" className="px-3 py-1 transition delay-75 rounded hover:bg-gray-200">Logout</a>
                        </li>
                    ) : (
                        <>
                            <li>
                                <NavLink to="/" className="px-3 py-1 transition delay-75 rounded hover:bg-gray-200">Login</NavLink>
                            </li>
                            <li>
                                <NavLink to="/register" className="px-3 py-1 transition delay-75 rounded hover:bg-gray-200">Register</NavLink>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </div>
    )
}

export default Header