import React from 'react'

const Register = () => {
  return (
    <>
    <div className='container mt-2' >
    <h1>Create an Account!</h1>

    <form className='w-50'>
      <label>First Name</label>
      <input type='text' className='form-control' placeholder='Enter your First Name'/>

      <label className='mt-4'>Last Name</label>
      <input type='text' className='form-control' placeholder='Enter your Last Name'/>

      <label className='mt-4'>Email</label>
      <input type='text' className='form-control' placeholder='Enter your Email Address'/>

      <label className='mt-4'>Password</label>
      <input type='text' className='form-control' placeholder='Create your Password'/>
      <label className='mt-4'>Confirm Password</label>
      <input type='text' className='form-control' placeholder='Retype your Password to Confirm'/>


      <button className='btn btn-light btn-outline-dark mt-4 w-100'>Create</button>
    </form>

    </div>
      
    </>
  )
}

export default Register
//1 make complete ui of the reg page (fields, button, etc)
//2 input (type) -make a state
//3 on change set the value to the state

