import React from 'react'
import AcceptTask from '../Tasklist/AcceptTask'
import NewTask from '../Tasklist/NewTask'
import CompleteTask from '../Tasklist/CompleteTask'
import FailedTask from '../Tasklist/FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='sm:h-[55%] overflow-x-auto flex flex-col sm:flex-row items-center justify-start gap-5 sm:flex-nowrap w-full py-5 mt-10'>
    {data.tasks.map((elem, idx)=>{
      if(elem.active){
        return <AcceptTask key={idx} data={elem} />
      }
      if(elem.newTask){
        return <NewTask key={idx} data={elem} />
      }
      if(elem.Completed){
        return <CompleteTask key={idx} data={elem} />
      }
      if(elem.failed){
        return <FailedTask key={idx} data={elem} />
      }
    })}
    </div>
  )
}

export default TaskList
