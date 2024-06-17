import React from 'react'
import { sidebar } from '../data/Sidebardata'

const Sidebar = () => {
  return (
    <div>
      <div className=' w-1/6 sm:w-1/5 border border-gray-300 border-4 h-screen p-3'>
          <div className='flex items-center p-4 text-3xl font-bold justify-center gap-3'>
            <img src="../assets/img/icon.png" alt="img" className='w-2/6'/>
            <h1 className='text-4xl hidden md:block'>Pocket</h1>
          </div>

          <div>
            <ul className='p-2 my-4 flex items-start flex-col text-xl'>
                {sidebar.map((val)=>{
                    return(
                      <li className=' flex items-center gap-3 px-2 my-4 ' key={val.id}>
                          <span>{val.icon}</span>
                          <span className='hidden md:block'>{val.name}</span>
                      </li>

                    )
                })}
            </ul>
          </div>
      </div>
    </div>
  )
}

export default Sidebar
