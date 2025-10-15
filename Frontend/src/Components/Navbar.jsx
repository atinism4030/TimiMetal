import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-screen mx-auto flex items-center justify-between p-3 fixed top-0 left-0 w-full z-60 bg-opacity-80 border border-gray-600">
       
        <h1 className="text-2xl font-bold text-gray-800">Timimetal</h1>

        <div className='flex items-center'>
        <ul className="hidden  items-center md:flex space-x-8 text-gray-700 font-medium">
          <li><a href="#" className="hover:text-blue-600 transition">Home</a></li>
          <li><a href="#" className="hover:text-blue-600 transition">Services</a></li>
          <li><a href="#" className="hover:text-blue-600 transition">About</a></li>
          <li><a href="#" className="hover:text-blue-600 transition">Projects</a></li>
          <li><a href="#" className="hover:text-blue-600 transition">Blog</a></li>
          <li><a href="#" className="hover:text-blue-600 transition">Contact</a></li>
        </ul>
        </div>
s
      </div>
    </nav>
  )
}

export default Navbar
