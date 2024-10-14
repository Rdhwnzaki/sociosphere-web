'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Logo from "../assets/logo.png";
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { registerUser } from '../redux/auth/authApi';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPass, setConfirmedPass] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmedPass, setShowConfirmedPass] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter();
    const { loading, error } = useSelector((state) => state.auth);

    const handleRegister = async () => {
        if (password !== confirmedPass) {
            toast.error('Passwords do not match');
            return;
        }

        try {
            await dispatch(registerUser({ username, email, password, password_confirmation: confirmedPass })).unwrap();
            toast.success('Registration successful!');
            setTimeout(() => {
                router.push('/login');
            }, 2000);
        } catch (err) {
            const errorMessage = err.response?.data?.message || 'Failed to register';
            toast.error(errorMessage);
            console.error('Failed to register:', err);
        }
    };

    useEffect(() => {
        document.title = "Socio Sphere | Register";
    }, []);

    return (
        <>
            <div className='flex justify-center items-center pt-10'>
                <Image src={Logo} alt='Logo' width={45} height={45} priority />
                <span className='font-semibold text-lg ps-5 text-black'>SocioSphere</span>
            </div>
            <div className='flex justify-center pt-24'>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <div className="card-body">
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>
                            <input
                                type="text"
                                className="grow"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input
                                type="email"
                                className="grow"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 mt-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className="grow"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="flex items-center justify-center h-4 w-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="h-4 w-4 opacity-70">
                                    {showPassword ? (
                                        <path d="M12 4.5C7.305 4.5 3.131 7.556 1.406 12c1.725 4.444 5.899 7.5 10.594 7.5s8.869-3.056 10.594-7.5C20.869 7.556 16.695 4.5 12 4.5zm0 12a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                                    ) : (
                                        <path d="M3.707 3.707a1 1 0 0 0-1.414 1.414l2.215 2.215A12.052 12.052 0 0 0 1.406 12c1.725 4.444 5.899 7.5 10.594 7.5 2.423 0 4.697-.702 6.616-1.915l2.086 2.086a1 1 0 0 0 1.414-1.414l-18-18zM12 15.5a4.5 4.5 0 0 1-4.309-5.673l1.691 1.691a2.5 2.5 0 0 0 3.6 3.6l1.691 1.691A4.474 4.474 0 0 1 12 15.5zm4.309-2.327-3.418-3.418a2.5 2.5 0 0 0-3.418-3.418L7.309 5.827C8.797 5.296 10.356 5 12 5c4.695 0 8.869 3.056 10.594 7.5a12.052 12.052 0 0 1-5.285 5.285l-1.818-1.818z" />
                                    )}
                                </svg>
                            </button>
                        </label>
                        <label className="input input-bordered flex items-center gap-2 mt-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <input
                                type={showConfirmedPass ? 'text' : 'password'}
                                className="grow"
                                placeholder="Confirmed Password"
                                value={confirmedPass}
                                onChange={(e) => setConfirmedPass(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmedPass(!showConfirmedPass)}
                                className="flex items-center justify-center h-4 w-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="h-4 w-4 opacity-70">
                                    {showConfirmedPass ? (
                                        <path d="M12 4.5C7.305 4.5 3.131 7.556 1.406 12c1.725 4.444 5.899 7.5 10.594 7.5s8.869-3.056 10.594-7.5C20.869 7.556 16.695 4.5 12 4.5zm0 12a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                                    ) : (
                                        <path d="M3.707 3.707a1 1 0 0 0-1.414 1.414l2.215 2.215A12.052 12.052 0 0 0 1.406 12c1.725 4.444 5.899 7.5 10.594 7.5 2.423 0 4.697-.702 6.616-1.915l2.086 2.086a1 1 0 0 0 1.414-1.414l-18-18zM12 15.5a4.5 4.5 0 0 1-4.309-5.673l1.691 1.691a2.5 2.5 0 0 0 3.6 3.6l1.691 1.691A4.474 4.474 0 0 1 12 15.5zm4.309-2.327-3.418-3.418a2.5 2.5 0 0 0-3.418-3.418L7.309 5.827C8.797 5.296 10.356 5 12 5c4.695 0 8.869 3.056 10.594 7.5a12.052 12.052 0 0 1-5.285 5.285l-1.818-1.818z" />
                                    )}
                                </svg>
                            </button>
                        </label>
                        <button className="btn bg-black text-white hover:bg-gray-800 mt-5" onClick={handleRegister}>Register</button>
                        <div className='flex justify-center mt-5'>
                            <span className='text-slate-500 text-base'>Have an account?</span>
                            <span className='font-bold ms-1 text-base cursor-pointer' onClick={() => {
                                router.push("/login")
                            }}>Login</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register