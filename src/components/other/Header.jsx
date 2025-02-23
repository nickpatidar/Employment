import React from 'react'

const Header = (props) => {

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='sm:text-2xl text-xl font-medium'>Hello, <br /> <span className='sm:text-3xl text-xl font-semibold'> username 👋</span></h1>
      <button onClick={logOutUser} className='bg-red-500 hover:bg-red-600 text-lg font-medium text-white px-2 py-1 sm:px-5 sm:py-2 rounded-sm cursor-pointer'>Log Out</button>
    </div>
  )
}

export default Header
