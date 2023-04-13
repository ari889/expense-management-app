import React from 'react'

const Alert = ({ message }) => {
    return (
        <div className="px-5 py-2 mb-3 bg-red-300 rounded text-red-950 flex flex-row justify-between items-center">{message} <button type="button" className="text-red-950">&times;</button></div>
    )
}

export default Alert