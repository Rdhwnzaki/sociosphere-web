'use client';
import React, { useEffect } from 'react'
import Navbar from '../components/Navbar';
import Image from 'next/image';
import { FiHome, FiBell } from "react-icons/fi";
import { RiUser3Line } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import { IoMdImages } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";

function Feed() {

    useEffect(() => {
        document.title = "Socio Sphere | Feed";
    }, []);

    return (
        <>
            <Navbar />
            <div className='flex justify-between mt-12'>
                <div className="card bg-base-100 w-80 h-96 shadow-sm flex flex-col items-center rounded-md ms-16 relative border">
                    <figure className="w-full">
                        <Image
                            src="/assets/bg-prof.jpg"
                            alt="Shoes"
                            width={320}
                            height={200}
                            style={{ height: '90px', width: '100%' }}
                            className="rounded-t-md"
                        />
                    </figure>
                    <div className="absolute top-14 left-9 z-10 avatar">
                        <div className="w-14 rounded-full ring ring-offset-0 ring-white">
                            <Image
                                src="/assets/profile.jpeg"
                                alt="avatar"
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>
                    <div className="card-body text-left w-full">
                        <h2 className="card-title font-medium">Ridhwan Zaki</h2>
                        <p>Software Engineer</p>
                        <div className='divide-y divide-slate-200 mt-5'>
                            <div className='flex items-center cursor-pointer hover:text-cyan-500 pt-1'>
                                <FiHome className='text-xl' />
                                <p className='py-1 ms-2'>Home</p>
                            </div>
                            <div className='flex items-center cursor-pointer hover:text-cyan-500 pt-1'>
                                <RiUser3Line className='text-xl' />
                                <p className='py-1 ms-2'>Profile</p>
                            </div>
                            <div className='flex items-center cursor-pointer hover:text-cyan-500 pt-1'>
                                <BiMessageDetail className='text-xl' />
                                <p className='py-1 ms-2'>Messages</p>
                            </div>
                            <div className='flex items-center cursor-pointer hover:text-cyan-500 pt-1'>
                                <FiBell className='text-xl' />
                                <p className='py-1 ms-2'>Notifications</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex-grow mx-8 w-3/6'>
                    <div className="card bg-base-100 shadow-sm rounded-md border">
                        <div className="card-body">
                            <div className='flex items-center'>
                                <div className='avatar'>
                                    <div className="w-14 rounded-full ring ring-offset-0 ring-white">
                                        <Image
                                            src="/assets/profile.jpeg"
                                            alt="avatar"
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                </div>
                                <input type="text" placeholder="What's on your mind?" className="input input-bordered w-full max-w-5xl ms-5" />
                            </div>
                            <div className='flex justify-between mt-3 items-center'>
                                <div className='ms-20'>
                                    <div className='flex items-center cursor-pointer hover:text-cyan-500 pt-1'>
                                        <IoMdImages className='text-xl' />
                                        <p className='py-1 ms-2'>Add Media</p>
                                    </div>
                                </div>
                                <div>
                                    <button className="btn bg-cyan-500 hover:bg-cyan-700 text-white rounded-badge px-6 text-md">Post</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-sm mt-10 rounded-md border">
                        <div className="card-body">
                            <h2 className="card-title">Posts Disini</h2>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className="card bg-base-100 w-80 h-96 shadow-sm me-16 rounded-md border">
                        <div className="card-body">
                            <h2 className="card-title border-b-2 py-2">Suggested Friends</h2>
                            <div className='mt-5 flex items-center justify-between'>
                                <div className='avatar'>
                                    <div className="w-14 rounded-full ring ring-offset-0 ring-white">
                                        <Image
                                            src="/assets/profile2.png"
                                            alt="avatar"
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <p>Thomas Baker</p>
                                    <p>Project Manager</p>
                                </div>
                                <button className="ms-2 btn btn-sm bg-slate-200 hover:bg-slate-400"><FaPlus className='text-lg' /></button>
                            </div>
                            <div className='mt-5 flex items-center justify-between'>
                                <div className='avatar'>
                                    <div className="w-14 rounded-full ring ring-offset-0 ring-white">
                                        <Image
                                            src="/assets/profile2.png"
                                            alt="avatar"
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <p>Thomas Baker</p>
                                    <p>Project Manager</p>
                                </div>
                                <button className="ms-2 btn btn-sm bg-slate-200 hover:bg-slate-400"><FaPlus className='text-lg' /></button>
                            </div>
                            <div className='mt-5 flex items-center justify-between'>
                                <div className='avatar'>
                                    <div className="w-14 rounded-full ring ring-offset-0 ring-white">
                                        <Image
                                            src="/assets/profile2.png"
                                            alt="avatar"
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <p>Thomas Baker</p>
                                    <p>Project Manager</p>
                                </div>
                                <button className="ms-2 btn btn-sm bg-slate-200 hover:bg-slate-400"><FaPlus className='text-lg' /></button>
                            </div>
                        </div>
                    </div>
                    <p className='text-left ms-7 mt-5 text-slate-500'>© 2024 Rdhwnzaki. All rights reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Feed