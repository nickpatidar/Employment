import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

   const [userData,setUserData] = useContext(AuthContext)

  return (
    <div className='bg-[#1c1c1c] sm:p-5 rounded mt-5 w-screen sm:w-[100%] '>
        <div className='bg-red-400 mb-2 py-2 sm:px-4 px-1 flex justify-between rounded'>
                <h2 className='text-lg font-medium w-1/7'>Employee Name</h2>
                <h3 className='text-lg font-medium w-1/7 pl-5'>New Task</h3>
                <h5 className='text-lg font-medium w-1/7 pl-2'>Active Task</h5>
                <h5 className='text-lg font-medium w-1/7 mr-7'>completed</h5>
                <h5 className='text-lg font-medium w-1/7'>failed</h5>
            </div>
        <div className='overflow-auto'>
            {userData.map(function(elem,idx){
                return <div key={idx} className='border-1 border-emerald-500 mb-2 py-2 px-1 sm:px-4 flex justify-between rounded'>
                <h2 className='text-lg font-medium w-1/7'>{elem.firstname}</h2>
                <h3 className='text-lg font-medium w-1/7 pl-5 text-blue-500'>{elem.taskNumbers.newTask}</h3>
                <h5 className='text-lg font-medium w-1/7 pl-2 text-yellow-400'>{elem.taskNumbers.active}</h5>
                <h5 className='text-lg font-medium w-1/7 pl-3 text-white'>{elem.taskNumbers.completed}</h5>
                <h5 className='text-lg font-medium w-1/7 pl-3 text-red-400'>{elem.taskNumbers.failed}</h5>
            </div>
            })}
        </div>
    </div>
  )
}

export default AllTask
