import React, { useEffect, useState } from 'react'

const Alert = ({ message, type }) => {
    const [close, setClose] = useState(false);
    let classtypes = '';
    let text = '';
    if (type === 'success') {
        classtypes = 'bg-green-300 rounded text-green-950';
        text = "text-green-950";
    } else if (type === 'error') {
        classtypes = 'bg-red-300 rounded text-red-950';
        text = "text-red-950";

    }

    useEffect(() => {
        if (message === '' && type === '') {
            setClose(true);
        }
    }, [message, type]);

    const hide = () => {
        setClose(true)
    }
    return (
        (!close && <div className={`px-5 py-2 mb-3 ${classtypes} flex flex-row justify-between items-center`}>{message} <button type="button" className={text} onClick={hide}>&times;</button></div>)
    )
}

export default Alert