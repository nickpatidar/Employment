import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../other/TaskList'

const EmployeeDashboard = (props) => {

  return (
    <div className='sm:p-10 p-5 bg-[#1c1c1c] h-full-screen sm:h-screen'>
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskListNumber data={props.data} />
      <TaskList data={props.data} />
    </div>
  )
}

export default EmployeeDashboard
