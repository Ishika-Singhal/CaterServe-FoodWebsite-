import React from 'react'
import Switch from './Switch '

const Header = () => {
  return (
    <div className='border border-gray-300 border-4'>
        <div className='flex justify-end items-center p-4'>
            <input type="text" className='rounded-3xl border border-1 border-gray-100 w-4/12 p-2' placeholder='Search'/>
            <i class="fas fa-search"></i>
            <Switch/>
            <a><i className="fas fa-user-circle text-2xl"></i></a>
        </div>
    </div>
  )
}

export default Header
