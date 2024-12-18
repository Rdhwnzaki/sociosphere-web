'use client';
import React, { useCallback, useEffect, useState } from 'react'
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
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../redux/posts/postsSlice';
import EachUtils from '../utils/EachUtils';
import moment from "moment"
import { createPosts, createComment, deletePosts } from '../redux/posts/postsSlice';

function Feed() {
    const [authUser, setAuthUser] = useState()
    const [token, setToken] = useState("")
    const dispatch = useDispatch()
    const { posts, loading, error } = useSelector((state) => state.posts);
    const [desc, setDesc] = useState("")
    const [dataPosts, setDataPosts] = useState([])
    const [selectedImage, setSelectedImage] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [commentPostId, setCommentPostId] = useState(0)
    const [viewCommentId, setViewCommentId] = useState(0)
    const [commenDesc, setCommentDesc] = useState("")

    useEffect(() => {
        document.title = "Socio Sphere | Feed";

        const dataUser = sessionStorage.getItem("user")
        setAuthUser(JSON.parse(dataUser))

        const tokenUser = sessionStorage.getItem("token")
        setToken(tokenUser)

        dispatch(getAllPosts())
    }, [dispatch])

    const handlePost = async () => {
        const token = sessionStorage.getItem("token");
        try {
            if (token && desc !== "") {
                await dispatch(
                    createPosts({
                        description: desc,
                        token: token,
                        image: selectedImage,
                    })
                ).unwrap();
                setDesc("");
                setSelectedImage(null);
            }
        } catch (error) {
            console.error('Create post failed', error);
        }
    };


    useEffect(() => {
        if (posts) {
            setDataPosts(posts)
        }
    }, [posts])

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(file);
        }
    };

    const handleImageClick = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    const toggleViewComment = useCallback((postId) => {
        if (viewCommentId !== postId) {
            setViewCommentId(postId)
        } else {
            setViewCommentId(0)
        }
    }, [viewCommentId])

    const handleComment = async () => {
        const token = sessionStorage.getItem("token");
        try {
            if (token && commenDesc !== "" && commentPostId !== 0) {
                await dispatch(
                    createComment({
                        description: commenDesc,
                        token: token,
                        post_id: commentPostId,
                    })
                ).unwrap();
                setCommentDesc("");
                setCommentPostId(0);
                dispatch(getAllPosts())
            }
        } catch (error) {
            console.error('Create comment failed', error);
        }
    }

    const handleDeletePost = async (id) => {
        const token = sessionStorage.getItem("token");
        try {
            await dispatch(deletePosts({ id: id, token: token })).unwrap()
            dispatch(getAllPosts())
        } catch (error) {
            console.error('Delete comment failed', error);
        }
    }

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
                        <h2 className="card-title font-medium">{authUser?.username ?? ""}</h2>
                        <p>{authUser?.bio ?? "-"}</p>
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
                <div className='flex-grow mx-8 w-3/6 max-h-[calc(100vh-100px)] overflow-y-auto overflow-x-clip scroll-smooth'>
                    <div className="card bg-base-100 shadow-sm rounded-md border mb-3">
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
                                <input type="text" placeholder="What's on your mind?" className="input input-bordered w-full max-w-5xl ms-5" value={desc} onChange={(e) => {
                                    setDesc(e.target.value)
                                }} />
                            </div>
                            <div className='flex justify-between mt-3 items-center'>
                                <div className='ms-20'>
                                    <div className='flex items-center cursor-pointer hover:text-cyan-500 pt-1'>
                                        <label htmlFor="avatarUpload" className='flex items-center cursor-pointer'>
                                            <IoMdImages className='text-xl' />
                                            <p className='py-1 ms-2'>Add Media</p>
                                            <input
                                                id="avatarUpload"
                                                type="file"
                                                className="hidden"
                                                onChange={handleImageChange}
                                            />
                                        </label>
                                    </div>
                                    {selectedImage && (
                                        <div className='mt-4'>
                                            <p>Selected file: {selectedImage.name}</p>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <button className="btn bg-cyan-500 hover:bg-cyan-700 text-white rounded-badge px-6 text-md" onClick={handlePost}>Post</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {loading ? (
                        <div className='text-center mt-5'>
                            <span className="loading loading-dots loading-lg text-neutral"></span>
                        </div>
                    ) : null}
                    {dataPosts.length > 0 ? (
                        <EachUtils of={dataPosts} render={post => <div className="card bg-base-100 shadow-sm mt-10 rounded-md border mb-10">
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
                                            <p className='font-medium text-lg'>{post?.user?.username}</p>
                                            <p className='text-sm text-slate-500'>{post?.user?.bio}</p>
                                        </div>
                                    </div>
                                    <div className='flex items-end flex-col'>
                                        {authUser?.id === post?.user?.id ? (
                                            <div className="dropdown dropdown-top dropdown-end">
                                                <BsThreeDots tabIndex={0} role="button" className="mb-4" />
                                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-28 p-2 shadow">
                                                    <li><a><MdOutlineEdit className='text-xl' />Edit</a></li>
                                                    <li onClick={() => { handleDeletePost(post.id) }}><a><RiDeleteBin5Line className='text-xl' />Delete</a></li>
                                                </ul>
                                            </div>
                                        ) : null}
                                        <p className={authUser?.id === post?.user?.id ? 'text-sm text-slate-500' : 'text-sm text-slate-500 mt-8'}>{moment(post.created_at).toNow()}</p>
                                    </div>
                                </div>
                                <div className='mt-5'>
                                    <p className='text-justify'>{post.description}</p>
                                    {post.image ? (
                                        <div className="flex justify-start items-center mt-10">
                                            <Image
                                                alt="imagePost"
                                                src={post.image}
                                                width={300}
                                                height={300}
                                                className="rounded-lg shadow-md object-cover transition-transform duration-200 hover:scale-105 cursor-pointer"
                                                onClick={handleImageClick}
                                            />

                                            {isOpen && (
                                                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50">
                                                    <div className="relative">
                                                        <button
                                                            onClick={handleCloseModal}
                                                            className="absolute top-0 right-0 m-4 text-white text-2xl"
                                                        >
                                                            &times;
                                                        </button>
                                                        <Image
                                                            alt="imagePost Enlarged"
                                                            src={post.image}
                                                            layout="responsive"
                                                            width={700}
                                                            height={700}
                                                            className="rounded-lg shadow-md object-contain max-h-[90vh] max-w-[90vw]"
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ) : null}
                                </div>
                                <div className="flex justify-between mt-16 p-4 border-t border-gray-200">
                                    <div className="flex flex-col items-center text-slate-500">
                                        <IoChatbubbleOutline className="text-2xl mb-1 cursor-pointer" onClick={() => {
                                            setCommentPostId(post.id);
                                        }} />
                                        <div className="flex items-center cursor-pointer tooltip" data-tip="View Comment" onClick={() => {
                                            toggleViewComment(post.id)
                                        }}>
                                            <p className="text-lg font-semibold">{post.comments?.length}</p>
                                            <p className="text-sm ms-2">Comments</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center text-slate-500">
                                        <AiOutlineLike className="text-2xl mb-1" />
                                        <div className="flex items-center">
                                            <p className="text-lg font-semibold">{post.likes}</p>
                                            <p className="text-sm ms-2">Likes</p>
                                        </div>
                                    </div>
                                </div>
                                {commentPostId === post.id ? (
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
                                        <input type="text" placeholder="Share your thoughts here..." className="input input-bordered w-full max-w-5xl ms-5" onChange={(e) => {
                                            setCommentDesc(e.target.value)
                                        }} />
                                        <button className='btn bg-cyan-500 hover:bg-cyan-700 text-white px-6 text-md ms-2' onClick={handleComment}>Send</button>
                                    </div>
                                ) : null}
                                {viewCommentId === post.id ? (
                                    <div>
                                        {post.comments ? (
                                            <EachUtils of={post.comments} render={comment => <div>
                                                <div className='bg-slate-200 rounded-lg mt-5 pb-5 border'>
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
                                                                    <p className='font-medium text-lg'>{comment.user.username}</p>
                                                                    {post.user_id === comment.user_id ? (
                                                                        <div className="badge bg-cyan-600 ms-4 text-white p-3">Author</div>
                                                                    ) : null}
                                                                </div>
                                                                <p className='text-sm text-slate-700'>{comment.user.bio}</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-end flex-col'>
                                                            <p className='text-sm'>{moment(comment.created_at).toNow()}</p>
                                                        </div>
                                                    </div>
                                                    <div className='mt-8 ms-6'>
                                                        <p className=' text-justify'>{comment.description}</p>
                                                    </div>
                                                    <div className='text-end mt-8 me-5'>
                                                        <p className=''>Reply</p>
                                                    </div>
                                                </div>
                                                {comment.replies.length > 0 ? (
                                                    <EachUtils of={comment.replies} render={reply => <div className='flex justify-end'>
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
                                                                            <p className='font-medium text-lg'>{reply.user.username}</p>
                                                                            {post.user_id === reply.user_id ? (
                                                                                <div className="badge bg-cyan-600 ms-4 text-white p-3">Author</div>
                                                                            ) : null}
                                                                        </div>
                                                                        <p className='text-sm text-slate-700'>{reply.user.bio}</p>
                                                                    </div>
                                                                </div>
                                                                <div className='flex items-end flex-col'>
                                                                    <p className='text-sm'>{moment(reply.created_at).toNow()}</p>
                                                                </div>
                                                            </div>
                                                            <div className='mt-8 ms-6'>
                                                                <p className=' text-justify'>{reply.description}</p>
                                                            </div>
                                                            <div className='text-end mt-8 me-5'>
                                                                <p className=''>Reply</p>
                                                            </div>
                                                        </div>
                                                    </div>} />
                                                ) : null}
                                            </div>} />
                                        ) : null}
                                    </div>
                                ) : null}
                            </div>
                        </div>} />
                    ) : null}
                </div>
                <div className='flex flex-col'>
                    <div className="card bg-base-100 w-80 h-2/4 shadow-sm me-16 rounded-md border">
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
                </div>
            </div >
        </>
    )
}

export default Feed