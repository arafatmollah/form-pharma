import React from 'react'

function form() {
  return (
    <div>
        <div className='mx-16 information'>
            <div>
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
              <form className='my-4 form p-5'>
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
                <label>Enter Your Phone Number</label><br></br>
                <input className='an input p-5' type='number' placeholder='Enter Your phone number'></input>
               </div>
               <div>
                <input type="checkbox" className='mx-6 p-4'></input>
                <label>Save this informations for a future fast checkout</label><br></br>
                <input type="checkbox" className='mx-6 p-4'></input>
                <label>Save this informations for a future fast checkout</label>
               </div>
              </form>
            </div>
            </div>
            </div>
            <div>
            <div className='summary p-6 my-4'>
            Order Summary
          <div className='flex justify-between my-2'>
            <img src={img}></img>
            <div className='mx-2 my-2'>
              <p className='text-xs'>ROLEX</p>
              <h3>Oyster Perpetual Explorer</h3>
              <p className='font-bold'>$34.222</p>
            </div>
          </div>
          <div className='flex justify-between my-2'>
            <img src={im}></img>
            <div className='m-2'>
              <p className='text-xs'>ROLEX</p>
              <h3>Oyster Perpetual Explorer</h3>
              <p>$34.222</p>
            </div>
          </div>
          <div className='flex justify-between mt-4'>
            <form>
              <input type={Text} className="form w-40" placeholder="Enter your name"></input>
            </form>
            <button className='btn'>Order</button>
          </div>
          <div className='my-4 p-6'>
            <div className='flex justify-between my-2'>
              <p>Subtotal</p>
              <p>$34.55</p>
            </div>
            <div className='flex justify-between'>
              <p>Shipping</p>
              <p className='text-red-400'>Free</p>
            </div>
            <div className='flex justify-between my-2'>
              <p>Discount</p>
              <p>-</p>
            </div>
            <div className='flex justify-between'>
              <p>Tax</p>
              <p>-</p>
            </div>
            <div className='flex justify-between'>
              <lr></lr>
            </div><div className='flex justify-between mt-6'>
              <p className='text-lg font-bold'>Total</p>
              <p className='text-lg font-bold'>$68.222</p>
            </div>

          </div>
        </div>
            </div>
        </div>
    </div>
  )
}

export default form