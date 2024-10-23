'use client';
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import Image from 'next/image';
import { FiHome, FiBell } from "react-icons/fi";
import { RiUser3Line } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import { IoMdImages } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoChatbubbleOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";

function Profile() {
    const [selectedTab, setSelectedTab] = useState(1);
    const [selectedSide, setSelectedSidel] = useState("general")

    useEffect(() => {
        document.title = "Socio Sphere | Profile";
    }, []);

    return (
        <>
            <Navbar />
            <div className='flex justify-between mt-12'>
                <div className="card bg-base-100 w-80 h-5/6 shadow-sm flex flex-col items-center rounded-md ms-16 relative border">
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
                            <div className='flex items-center cursor-pointer hover:text-cyan-500 py-2'>
                                <FiHome className='text-xl' />
                                <p className='py-1 ms-2'>Home</p>
                            </div>
                            <div className='flex items-center cursor-pointer hover:text-cyan-500 py-2'>
                                <RiUser3Line className='text-xl' />
                                <p className='py-1 ms-2'>Profile</p>
                            </div>
                            <div className='flex items-center cursor-pointer hover:text-cyan-500 py-2'>
                                <BiMessageDetail className='text-xl' />
                                <p className='py-1 ms-2'>Messages</p>
                            </div>
                            <div className='flex items-center cursor-pointer hover:text-cyan-500 py-2'>
                                <FiBell className='text-xl' />
                                <p className='py-1 ms-2'>Notifications</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex-grow mx-8 w-3/6 max-h-[calc(100vh-100px)] overflow-y-auto scroll-smooth'>
                    <div className="card bg-base-100 shadow-sm rounded-md border mb-3 me-8">
                        <div className="card-body">
                            <div className='flex justify-between items-center ms-4'>
                                <div className='flex row'>
                                    <div className='avatar'>
                                        <div className="w-20 rounded-full ring ring-offset-0 ring-white">
                                            <Image
                                                src="/assets/profile.jpeg"
                                                alt="avatar"
                                                width={100}
                                                height={100}
                                            />
                                        </div>
                                    </div>
                                    <div className='flex flex-col mt-5 ms-5'>
                                        <span>Ridhwan Zaki<span className='text-xs mx-1 text-slate-500'>/</span><span className='text-xs text-slate-500'>@Rdhwnzaki</span></span>
                                        <span className='text-sm text-slate-500'>Software Engineer</span>
                                    </div>
                                </div>
                                <div className='flex me-6'>
                                    <div className='text-center me-6'>
                                        <p className='text-2xl font-bold'>12</p>
                                        <p>Post</p>
                                    </div>
                                    <div className='text-center me-6'>
                                        <p className='text-2xl font-bold'>290</p>
                                        <p>Followers</p>
                                    </div>
                                    <div className='text-center'>
                                        <p className='text-2xl font-bold'>100</p>
                                        <p>Following</p>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-3 items-center'>
                                <div role="tablist" className="tabs tabs-bordered">
                                    <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="My Posts" onChange={() => { setSelectedTab(1) }} defaultChecked />
                                    <div role="tabpanel" className="tab-content p-0 hidden"></div>
                                    <input
                                        type="radio"
                                        name="my_tabs_1"
                                        role="tab"
                                        className="tab"
                                        aria-label="Saved Posts"
                                        onChange={() => { setSelectedTab(2) }}
                                    />
                                    <div role="tabpanel" className="tab-content p-0 hidden"></div>

                                    <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Settings" onChange={() => { setSelectedTab(3) }} />
                                    <div role="tabpanel" className="tab-content p-0 hidden"></div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='flex'>
                        {selectedTab === 1 ? (
                            <div className="card bg-base-100 shadow-sm mt-10 rounded-md border mb-10 w-3/4">
                                <div className="card-body">
                                    <div className='flex justify-between border-b-2 pb-8'>
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
                                            <div className='ms-5'>
                                                <p className='font-medium text-lg'>Ridhwan Zaki</p>
                                                <p className='text-sm text-slate-500'>Software Engineer</p>
                                            </div>
                                        </div>
                                        <div className='flex items-end flex-col'>
                                            <div className="dropdown">
                                                <BsThreeDots tabIndex={0} role="button" className="mb-4" />
                                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-28 p-2 shadow">
                                                    <li><a><MdOutlineEdit className='text-xl' />Edit</a></li>
                                                    <li><a><RiDeleteBin5Line className='text-xl' />Delete</a></li>
                                                </ul>
                                            </div>
                                            <p className='text-sm text-slate-500'>1 minute ago</p>
                                        </div>
                                    </div>
                                    <div className='mt-5'>
                                        <p className='text-justify'>In todays fast-paced, digitally driven world, digital marketing is not just a strategy. its a necessity for businesses of all sizes. 📈</p>
                                    </div>
                                    <div className='flex justify-between mt-16'>
                                        <div className='flex items-center text-slate-500'>
                                            <IoChatbubbleOutline className='text-xl' />
                                            <p className='text-md ms-3'>Comments</p>
                                        </div>
                                        <div className='text-slate-500'>
                                            <AiOutlineLike className='text-2xl' />
                                        </div>
                                    </div>
                                    <div className='flex items-center mt-16 mb-10'>
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
                                        <input type="text" placeholder="Share your thoughts here..." className="input input-bordered w-full max-w-5xl ms-5" />
                                    </div>
                                    <div className='bg-slate-200 rounded-lg mt-5 pb-5 border'>
                                        <div className='flex justify-between m-5'>
                                            <div className='flex items-center'>
                                                <div className='avatar'>
                                                    <div className="w-14 rounded-full ">
                                                        <Image
                                                            src="/assets/profile2.png"
                                                            alt="avatar"
                                                            width={100}
                                                            height={100}
                                                        />
                                                    </div>
                                                </div>
                                                <div className='ms-5'>
                                                    <p className='font-medium text-lg'>Thomas Baker</p>
                                                    <p className='text-sm text-slate-700'>Project Manager</p>
                                                </div>
                                            </div>
                                            <div className='flex items-end flex-col'>
                                                <p className='text-sm'>2 hours ago</p>
                                            </div>
                                        </div>
                                        <div className='mt-8 ms-6'>
                                            <p className=' text-justify'>Fantastic post! Your content always brings a smile to my face. Keep up the great work! 👏 </p>
                                        </div>
                                        <div className='text-end mt-8 me-5'>
                                            <p className=''>Reply</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-end'>
                                        <div className='bg-slate-200 rounded-lg mt-5 pb-5 w-11/12 border'>
                                            <div className='flex justify-between m-5'>
                                                <div className='flex items-center'>
                                                    <div className='avatar'>
                                                        <div className="w-14 rounded-full ">
                                                            <Image
                                                                src="/assets/profile.jpeg"
                                                                alt="avatar"
                                                                width={100}
                                                                height={100}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className='ms-5'>
                                                        <div className='flex flex-row'>
                                                            <p className='font-medium text-lg'>Ridhwan Zaki</p>
                                                            <div className="badge bg-cyan-600 ms-4 text-white p-3">Author</div>
                                                        </div>
                                                        <p className='text-sm text-slate-700'>Software Enggineer</p>
                                                    </div>
                                                </div>
                                                <div className='flex items-end flex-col'>
                                                    <p className='text-sm'>2 hours ago</p>
                                                </div>
                                            </div>
                                            <div className='mt-8 ms-6'>
                                                <p className=' text-justify'>Thank you for sharing your comment!</p>
                                            </div>
                                            <div className='text-end mt-8 me-5'>
                                                <p className=''>Reply</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : selectedTab === 2 ? (
                            <div className="card bg-base-100 shadow-sm mt-10 rounded-md border mb-10 w-3/4">
                                <div className="card-body">
                                    <div className='flex justify-between border-b-2 pb-8'>
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
                                            <div className='ms-5'>
                                                <p className='font-medium text-lg'>Ridhwan Zaki</p>
                                                <p className='text-sm text-slate-500'>Software Engineer</p>
                                            </div>
                                        </div>
                                        <div className='flex items-end flex-col'>
                                            <div className="dropdown">
                                                <BsThreeDots tabIndex={0} role="button" className="mb-4" />
                                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-28 p-2 shadow">
                                                    <li><a><MdOutlineEdit className='text-xl' />Edit</a></li>
                                                    <li><a><RiDeleteBin5Line className='text-xl' />Delete</a></li>
                                                </ul>
                                            </div>
                                            <p className='text-sm text-slate-500'>1 minute ago</p>
                                        </div>
                                    </div>
                                    <div className='mt-5'>
                                        <p className='text-justify'>In todays fast-paced, digitally driven world, digital marketing is not just a strategy. its a necessity for businesses of all sizes. 📈</p>
                                    </div>
                                    <div className='flex justify-between mt-16'>
                                        <div className='flex items-center text-slate-500'>
                                            <IoChatbubbleOutline className='text-xl' />
                                            <p className='text-md ms-3'>Comments</p>
                                        </div>
                                        <div className='text-slate-500'>
                                            <AiOutlineLike className='text-2xl' />
                                        </div>
                                    </div>
                                    <div className='flex items-center mt-16 mb-10'>
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
                                        <input type="text" placeholder="Share your thoughts here..." className="input input-bordered w-full max-w-5xl ms-5" />
                                    </div>
                                    <div className='bg-slate-200 rounded-lg mt-5 pb-5 border'>
                                        <div className='flex justify-between m-5'>
                                            <div className='flex items-center'>
                                                <div className='avatar'>
                                                    <div className="w-14 rounded-full ">
                                                        <Image
                                                            src="/assets/profile2.png"
                                                            alt="avatar"
                                                            width={100}
                                                            height={100}
                                                        />
                                                    </div>
                                                </div>
                                                <div className='ms-5'>
                                                    <p className='font-medium text-lg'>Thomas Baker</p>
                                                    <p className='text-sm text-slate-700'>Project Manager</p>
                                                </div>
                                            </div>
                                            <div className='flex items-end flex-col'>
                                                <p className='text-sm'>2 hours ago</p>
                                            </div>
                                        </div>
                                        <div className='mt-8 ms-6'>
                                            <p className=' text-justify'>Fantastic post! Your content always brings a smile to my face. Keep up the great work! 👏 </p>
                                        </div>
                                        <div className='text-end mt-8 me-5'>
                                            <p className=''>Reply</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-end'>
                                        <div className='bg-slate-200 rounded-lg mt-5 pb-5 w-11/12 border'>
                                            <div className='flex justify-between m-5'>
                                                <div className='flex items-center'>
                                                    <div className='avatar'>
                                                        <div className="w-14 rounded-full ">
                                                            <Image
                                                                src="/assets/profile.jpeg"
                                                                alt="avatar"
                                                                width={100}
                                                                height={100}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className='ms-5'>
                                                        <div className='flex flex-row'>
                                                            <p className='font-medium text-lg'>Ridhwan Zaki</p>
                                                            <div className="badge bg-cyan-600 ms-4 text-white p-3">Author</div>
                                                        </div>
                                                        <p className='text-sm text-slate-700'>Software Enggineer</p>
                                                    </div>
                                                </div>
                                                <div className='flex items-end flex-col'>
                                                    <p className='text-sm'>2 hours ago</p>
                                                </div>
                                            </div>
                                            <div className='mt-8 ms-6'>
                                                <p className=' text-justify'>Thank you for sharing your comment!</p>
                                            </div>
                                            <div className='text-end mt-8 me-5'>
                                                <p className=''>Reply</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : <div className="card bg-base-100 w-full shadow me-8 border rounded-md">
                            <div className="card-body">
                                <h2 className="card-title">Settings</h2>
                                <div className="divider mb-0"></div>
                                <div className='flex'>
                                    <div className='w-80 border-r-2'>
                                        <div className='flex flex-col'>
                                            <div className='text-md p-2 hover:bg-slate-200 cursor-pointer' onClick={() => { setSelectedSidel('general') }}>
                                                <p className='text-md'>General</p>
                                            </div>
                                            <div className='text-md p-2 hover:bg-slate-200 cursor-pointer' onClick={() => { setSelectedSidel('account') }}>
                                                <p className='text-md'>Account</p>
                                            </div>
                                            <div className='text-md p-2 hover:bg-slate-200 cursor-pointer' onClick={() => { setSelectedSidel('logout') }}>
                                                <p className='text-md'>Logout</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full ms-20 mt-2'>
                                        {selectedSide === 'general' ? (
                                            <div className='flex flex-col'>
                                                <div className=" w-full mb-3">
                                                    <label
                                                        htmlFor="avatarUpload"
                                                        className="flex flex-col items-center justify-center w-80 h-32 border-2 border-dashed border-gray-400 rounded-lg cursor-pointer hover:border-gray-500"
                                                    >
                                                        <div className="flex flex-col items-center justify-center">
                                                            <span className="mt-2 text-sm text-gray-600">Choose an image for avatar</span>
                                                        </div>
                                                        <input id="avatarUpload" type="file" className="hidden" />
                                                    </label>
                                                </div>
                                                <input type="text" placeholder="Full Name" className="input input-bordered w-full max-w-xs mb-3 focus:ring-2 focus:ring-black" />
                                                <input type="text" placeholder="Username" className="input input-bordered w-full max-w-xs mb-3 focus:ring-2 focus:ring-black" />
                                                <textarea
                                                    className="w-80 h-32 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                                    placeholder="Bio"
                                                ></textarea>
                                                <button className="w-52 btn bg-black text-white hover:bg-black mt-5">Save Changes</button>
                                            </div>
                                        ) : selectedSide === 'account' ? (
                                            <div>
                                                <p className='text-xl font-medium'>Delete Account</p>
                                                <p className='text-md text-slate-500'>This action is irreversible and will permanently delete all your data associated with the account.</p>
                                                <button className="btn btn-outline hover:bg-red-500 hover:border-red-500 border-red-500 text-red-500 mt-5">Delete My Account</button>
                                            </div>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        </div>}
                        {selectedTab !== 3 ? (<div className='flex flex-col mt-10 ms-5'>
                            <div className="card bg-base-100 w-80 h-2/4 shadow-sm rounded-md border">
                                <div className="card-body  max-h-[calc(100vh-100px)] overflow-y-auto scroll-smooth">
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
                                            <p className='text-slate-500'>Project Manager</p>
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
                                            <p className='text-slate-500'>Project Manager</p>
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
                                            <p className='text-slate-500'>Project Manager</p>
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
                                            <p className='text-slate-500'>Project Manager</p>
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
                                            <p className='text-slate-500'>Project Manager</p>
                                        </div>
                                        <button className="ms-2 btn btn-sm bg-slate-200 hover:bg-slate-400"><FaPlus className='text-lg' /></button>
                                    </div>
                                </div>
                            </div>
                            <p className='text-left ms-7 mt-5 text-slate-500'>© 2024 Rdhwnzaki. All rights reserved.</p>
                        </div>) : null}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile