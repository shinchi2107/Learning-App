import React from 'react'
import MenuItem from './MenuItem'
import { menuItems } from '@/constants'

const Sidebar = () => {
  return (
    <aside className="p-5 border-r border-r-gray-200">
      <div className='font-bold text-3xl inline-block mb-5'>Learning App</div>
      <ul>
        {menuItems.map((item) => 
        (
          <MenuItem key={item.title} url={item.url} title={item.title} icon={item.icon} />
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar