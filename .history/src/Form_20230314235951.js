import React from 'react'

function form() {
  return (
    <div>
        <div className='mx-16'>
            <div className='flex my-4'>
                <p className='text-green-600'>Shop</p>
                <p className='text-green-600'> /Ring</p>
                <p className='text-purple-600'>/Order</p>
            </div>
            <div>
            <div className='info p-6 flex justify-between'>
              <p>1. Contact Information</p>
              <p>Change </p>
            </div>
            <div className='my-4'>
              <p>2. Shipping Address</p>
              <form className='my-4'>
               <div className='flex'>
               <div className='mx-6'>
                <label>First Name</label> <br></br>
                <input className='input p-4' type='text' placeholder="Enter your Name"></input>
                </div>
                <div>
                <label>Last Name</label> <br></br>
                <input className='input p-4' type='text' placeholder="Enter your Name"></input>
                </div>
               </div>
               <div className='my-4 mx-6'>
                <label>Enter Your Country Name</label><br></br>
                <input className='an input p-5' type='text' placeholder='Enter Your country name'></input>
               </div>
               <div className='my-4 mx-6'>
                <label>Enter Your Stress Name</label><br></br>
                <input className='an input p-5' type='text' placeholder='Enter Your Stress name'></input>
               </div>
               <div className='my-4 mx-6'>
                <label>Enter Your City Name</label><br></br>
                <input className='an input p-5' type='text' placeholder='Enter Your City name'></input>
               </div>
               <div className='flex'>
               <div className='mx-6'>
                <label>State</label> <br></br>
                <input className='input p-4' type='text' placeholder="Enter your State Name"></input>
                </div>
                <div>
                <label>Zip Code</label> <br></br>
                <input className='input p-4' type='number' placeholder="Enter your Zip Code"></input>
                </div>
               </div>
               <div className='my-4 mx-6'>
                <label>Enter Your Country Name</label><br></br>
                <input className='an input p-5' type='text' placeholder='Enter Your country name'></input>
               </div>
              </form>
            </div>
            </div>
        </div>
    </div>
  )
}

export default form