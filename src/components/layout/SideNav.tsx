// import { useState } from "react";
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import routes from '~/constants/route'
import { cn } from '~/lib/cn'

interface SideNavProps extends React.HTMLAttributes<HTMLElement> {
  collapsed: boolean
  setCollapsed: (state: boolean) => void
}

const SideNav = ({ collapsed, setCollapsed }: SideNavProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { pathname } = useLocation()

  const getKeyFromPath = (path: string): number => {
    const route = routes.find((route) => route.path === path)
    if (route) {
      return route.key
    }
    return -1
  }

  return (
    <aside className='fixed bottom-0 left-0 top-0 h-screen w-[200px] overflow-auto bg-yellow-200'>
      <div className='' />
      <ul className='flex h-full w-full flex-col'>
        {routes.map((route) => {
          return (
            <li key={route.key} className={cn('h-14 text-foreground hover:bg-background', {})}>
              <Link to={route.path} className='flex h-full w-full flex-row items-center justify-start gap-2'>
                <span>
                  <route.icon />
                </span>
                <span
                  className={cn({
                    hidden: collapsed
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
