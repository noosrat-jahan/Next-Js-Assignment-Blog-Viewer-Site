"use client";
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const details = () => {

    const { id } = useParams()
    console.log(id);
    const [blogdetails, setBlogDetails] = useState({})

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res.data);
                setBlogDetails(res.data)
            })
    }, [])
    console.log(blogdetails);
    return (
        <div className='w-10/12 mt-10 mx-auto min-h-96'>
            <h1 className='text-3xl text-center uppercase font-bold text-sky-500'>Blog Details</h1>
            <div className='text-left mt-5 border space-y-3 rounded-lg p-10 border-cyan-500'>
                <p className='font-light text-sm'># Post No: {blogdetails.id}</p>
                <h1 className='text-2xl font-bold text-cyan-800 underline'>{blogdetails.title}</h1>
                <p className='font-light'>{blogdetails.body}</p>
            </div>
        </div>
    )
}

export default details

