import React from 'react'
import { useSelector } from 'react-redux';

const Profile = () => {
    const { auth, expense } = useSelector(state => state);

    return (
        <>
            <div className="w-4/5 mx-auto rounded shadow mt-10">
                <h2 className="bg-gray-200 px-4 py-2 font-bold">{auth?.user?.name}'s profile</h2>

                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>{auth?.user?.name}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{auth?.user?.email}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div >
        </>
    )
}

export default Profile