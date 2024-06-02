'use client';
import { headerLinks } from '@/constents'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import React from 'react'

const Navitems = () => {
  const Pathname = usePathname()
  return (
    <ul className='md:flex-between flex w-full flex-col items-start gap-5 md:flex-row'>
      {headerLinks?.map((link) => {
        const isActive = Pathname === link?.route;
        return (<li
          key={link.route}
          className={`${isActive && "text-primary-500"} flex-center`}
        >
          <Link href={link?.route}>{link?.label}</Link>
        </li>)
      })}
    </ul>
  )
}

export default Navitems
