import React from 'react'

const NavBar = () => {
    return (
        <div className='flex flex-row justify-between w-full h-10 bg-blue-950'>
            <div className='text-white font-bold text-lg p-2'>
                E-commerce
            </div>
            <div className="flex justify-end p-2 ">
                <div className="flex items-center space-x-4">
                    <button className="text-white hover:text-blue-300">Login</button>
                    <button className="text-white hover:text-blue-300">Register</button>
                </div>
            </div>
        </div>
    )
}

export default NavBar