import React from 'react'

import Cards from './Cards'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"




export default function Course() {
  const [book, setbook] = useState([]);
  useEffect(() => {
    const getbook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book")
        console.log(res.data)
        setbook(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getbook();
  },[])

return (
  <>
    <div className="max-w-screen-2xl container mt-25 px-10 py-2 md:px-15 py-5 items-center justify-center text-center space-y-8">
      <h1 className="text-3xl">We're Delighted to have you <span className='text-pink-500'>here !:</span></h1>
      <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur maxime porro ipsa recusandae, ratione, aperiam dolore inventore corporis voluptatibus excepturi quisquam. Ipsum possimus enim eum odio minima minus ex labore quae, quis omnis sint aut necessitatibus voluptate quam eos unde voluptatum saepe quidem temporibus dolore! Architecto sequi mollitia repudiandae laboriosam.</p>

      <Link to="/">
        <button type="button" className="bg-pink-500 text-white hover:bg-pink-700 duration-200 cursor-pointer py-1 px-4 rounded-xl">Back</button>
      </Link>
    </div>
    <div className="w-full max-w-screen-2xl mx-auto px-4 md:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {book.map((item) => (
        <Cards key={item.id} item={item} />
      ))}
    </div>

  </>
)
}
