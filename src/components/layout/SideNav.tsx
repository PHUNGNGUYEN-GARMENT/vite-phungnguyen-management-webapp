// import { useState } from "react";
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '~/assets/logo.svg'
import routes from '~/constants/route'
import { cn } from '~/lib/cn'

interface SideNavProps extends React.HTMLAttributes<HTMLElement> {}

// eslint-disable-next-line no-empty-pattern
const SideNav = ({}: SideNavProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { pathname } = useLocation()

  return (
    <aside className='fixed left-0 top-0 flex min-h-screen w-[72px] flex-col gap-2 overflow-auto bg-card lg:w-[250px]'>
      <div className='relative flex justify-center py-5'>
        <img src={logo} alt='logo' className='h-10 w-10 object-contain lg:h-20 lg:w-20' />
      </div>
      <ul dir='ltr' tabIndex={0} className='relative flex h-full w-full flex-col' data-menu-list={true} role='menu'>
        {routes.map((route) => {
          return (
            <li key={route.key} className='relative' tabIndex={route.key} role='menuitem'>
              <Link
                to={route.path}
                className={cn(
                  'flex h-12 w-full flex-row items-center justify-start gap-2 px-4 py-3 font-semibold text-accent-foreground hover:bg-accent',
                  {
                    'bg-accent text-accent-foreground before:absolute before:left-0 before:h-full before:w-1 before:rounded-br-full before:rounded-tr-full before:bg-primary':
                      pathname === route.path
                  }
                )}
              >
                <span role='img'>
                  <route.icon
                    size={20}
                    className={cn('relative left-[10px] lg:left-0', {
                      'text-muted': pathname !== route.path
                    })}
                  />
                </span>
                <span
                  className={cn('hidden lg:flex', {
                    '': pathname === route.path
                  })}
                >
                  {route.name}
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
export default SideNav
