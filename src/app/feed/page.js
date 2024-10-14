'use client';
import React, { useEffect } from 'react'
import Navbar from '../components/Navbar';

function Feed() {

    useEffect(() => {
        document.title = "Socio Sphere | Feed";
    }, []);

    return (
        <>
            <Navbar />
            <div className='flex justify-between mt-12'>
                <div className="card bg-base-100 w-80 h-96 shadow-sm flex items-center rounded-md ms-16">
                    <div className="card-body">
                        <h2 className="card-title">Flex</h2>
                    </div>
                </div>
                <div className='flex-grow mx-8 w-3/6'>
                    <div className="card bg-base-100 shadow-sm rounded-md">
                        <div className="card-body">
                            <h2 className="card-title">Flex</h2>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-sm mt-10 rounded-md">
                        <div className="card-body">
                            <h2 className="card-title">Flex</h2>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-80 h-96 shadow-sm flex items-center me-16 rounded-md">
                    <div className="card-body">
                        <h2 className="card-title">Flex</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feed