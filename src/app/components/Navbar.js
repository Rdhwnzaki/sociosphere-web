import React from 'react'
import Image from 'next/image'
import Logo from "../assets/logo.png"
import { RiUser3Line } from "react-icons/ri";

function Navbar() {
    return (
        <div className="navbar bg-base-100 pt-3 pb-3 flex justify-between items-center">
            <div className="navbar-start flex items-center ms-16">
                <Image src={Logo} alt="Logo" width={50} />
                <span className="font-bold text-lg ms-1">Socio Sphere</span>
            </div>
            <div className="navbar-center flex-grow mx-4 w-3/6">
                <label className="input input-bordered flex items-center gap-2 w-full">
                    <input type="text" className="flex-grow w-full" placeholder="Search" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
            </div>
            <div className="navbar-end flex items-center me-16">
                <span className="font-normal text-sm me-5 cursor-pointer">Logout</span>
                <RiUser3Line className="text-xl cursor-pointer" />
            </div>
        </div>
    )
}

export default Navbar