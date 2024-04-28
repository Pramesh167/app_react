import React,{useState} from 'react'

const Register = () => {
  //logic section

  //make a usestate for 5 fields
  const[firstName,setFirstName]=useState('')
  const[lastName,setLastName]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[confirmPassword,setConfirmPassword]=useState('')

  //usetate for error message
  const[firstNameError,setFirstNameError]=useState('')
  const[lastNameError,setLastNameError]=useState('')
  const[emailError,setEmailError]=useState('')
  const[passwordError,setPasswordError]=useState('')
  const[confirmPasswordError,setConfirmPasswordError]=useState('')
  

  //make each function for changing value
  const handleFirstname=(e)=>{
    setFirstName(e.target.value);

  }
  const handleLastname=(e)=>{
    setLastName(e.target.value);

  }
  const handleEmail=(e)=>{
    setEmail(e.target.value);

  }
  const handlePassword=(e)=>{
    setPassword(e.target.value);

  }
  const handleConfirmpassword=(e)=>{
    setConfirmPassword(e.target.value);

  }

  //submit button function
  const handleSubmit=(e)=>{
    e.preventDefault()

    console.log(firstName,lastName,email,password,confirmPassword)

  }
  






  return (
    <>
    <div className='container mt-2' >
    <h1>Create an Account!</h1>

    <form className='w-50'>
      <label>First Name :{firstName}</label>
      <input onChange={handleFirstname} type='text' className='form-control' placeholder='Enter your First Name'/>

      <label className='mt-4'>Last Name:{lastName}</label>
      <input onChange={handleLastname}type='text' className='form-control' placeholder='Enter your Last Name'/>

      <label className='mt-4'>Email:{email}</label>
      <input onChange={handleEmail}type='text' className='form-control' placeholder='Enter your Email Address'/>

      <label className='mt-4'>Password:{password}</label>
      <input onChange={handlePassword} type='text' className='form-control' placeholder='Create your Password'/>

      <label className='mt-4'>Confirm Password:{confirmPassword}</label>
      <input onChange={handleConfirmpassword} type='text' className='form-control' placeholder='Retype your Password to Confirm'/>


      <button onClick={handleSubmit} className='btn btn-light btn-outline-dark mt-4 w-100'>Create</button>
    </form>

    </div>
      
    </>
  )
}

export default Register
//1 make complete ui of the reg page (fields, button, etc)
//2 input (type) -make a state
//3 on change set the value to the state
