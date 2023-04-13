import React from 'react'
import Header from './inc/Header'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default Layout