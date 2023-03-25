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
            <div>
              <p>2. Shipping Address</p>
              <form>
                <label>First Name</label>
                <input ></input>
              </form>
            </div>
            </div>
        </div>
    </div>
  )
}

export default form