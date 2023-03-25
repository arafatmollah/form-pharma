import './App.css'
import React from 'react'
import {BsSearch} from 'react-icons/bs'
function Nav() {
  return (
    <div>
        <div className='box-border h-16 w-100 p-4 mx-20 my-5 rounded-xl'>
          <div className='flex justify-between align-middle'>
                <p className='text-white mt-1'>Search Here</p>
                <button className="btn mb-1 py-2 flex items-center justify-between"><BsSearch></BsSearch> Button</button>
          </div>
        </div>
    </div>
  )
}

export default Nav