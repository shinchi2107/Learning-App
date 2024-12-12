import React from 'react'
type Props = {
  title: string;
  url: string;
  icon?: React.ReactNode;
}
const MenuItem = ({ title, url, icon }: Props) => {
  return (
    <li>
      <a href={url} className='p-3 rounded-md flex items-center gap-3 text-gray70 hover:text-primary hover:bg-primary hover:bg-opacity-10 '>
        {icon}
        {title}
      </a>
    </li>
  )
}

export default MenuItem;