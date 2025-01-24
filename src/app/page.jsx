"use client";
import axios from 'axios'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Home = () => {

    const [blogs, setBlogs] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        console.log(res.data);
        setBlogs(res.data)
      })
  }, [])

  return (
    <div>
      <div className="grid grid-cols-2 items-center justify-items-center min-h-screen p-8 pb-20 gap-10 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        {
            blogs.map(( blog) => <div 
              className='border border-blue-100 space-y-3 w-full h-20 shadow-md rounded-lg px-10 py-20 bg-none text-green-800 font-bold flex flex-col justify-center items-start text-left ' 
              key={blog.id} >
                <p className='italic'>Blog Post {blog.id}</p>
                <Link href={`/blog/${blog.id}`} className='text-2xl underline text-blue-900'>{blog.title}</Link>              
                            
              </div>)
        }
      </div>
    </div>
  )
}

export default Home