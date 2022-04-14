import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className='bg-white py-24 px-36'>
            <div className="page-container">
                <Link to='/' className='text-gray-800'>
                    الصفحة الرئيسية
                </Link>
            </div>
        </nav>
    )
}
